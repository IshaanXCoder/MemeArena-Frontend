// Stub toast hook - you may want to implement actual toast functionality
export function useToast() {
  return {
    toast: (options: any) => {
      console.log("Toast stub:", options)
    }
  }
}

export { useToast as toast }
