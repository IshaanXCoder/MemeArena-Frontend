import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold font-retro ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 uppercase tracking-wide shadow-md hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-teal text-beige border-teal hover:bg-teal-dark hover:border-teal-dark hover:shadow-xl",
        destructive:
          "bg-red-600 text-white border-red-600 hover:bg-red-500 hover:border-red-500 hover:shadow-xl",
        outline:
          "border-teal bg-transparent text-teal hover:bg-teal hover:text-beige hover:shadow-xl",
        secondary:
          "bg-orange text-beige border-orange hover:bg-orange-dark hover:border-orange-dark hover:shadow-xl",
        ghost: "border-transparent bg-transparent text-charcoal hover:bg-mustard/20 hover:text-mustard hover:border-mustard",
        link: "text-teal border-transparent bg-transparent underline-offset-4 hover:underline hover:text-teal-dark",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
