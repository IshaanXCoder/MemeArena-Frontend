"use client"

// Stub wallet hook for frontend compatibility
export function useWallet() {
  return {
    isConnected: false,
    account: null,
    isLoading: false,
    error: null,
    connectWallet: async () => {
      console.log("Wallet connection stub - implement actual wallet logic")
    },
    disconnectWallet: () => {
      console.log("Wallet disconnect stub")
    },
    formatAddress: (address: string) => {
      if (!address) return ""
      return `${address.slice(0, 6)}...${address.slice(-4)}`
    },
    isMetaMaskInstalled: false
  }
}
