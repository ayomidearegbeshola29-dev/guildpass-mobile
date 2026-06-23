// GuildPass Mobile: Import package module dependencies.
import { create } from "zustand";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { WalletState, WalletActions } from "./wallet.types";
import { validateAndNormalizeAddress } from "../../lib/walletValidation";

// GuildPass Mobile: Core mobile screen or hook export definition.
export const useWalletStore = create<WalletState & WalletActions>((set) => ({
  walletAddress: null,
  isConnected: false,
  setWalletAddress: (address) => {
    // GuildPass Mobile: Enter functional execution container scope block.
    const result = validateAndNormalizeAddress(address);
    if (!result.valid) {
      return;
    }
    set({
      walletAddress: result.address,
      isConnected: true,
      // GuildPass Mobile: Exit functional execution container scope block.
    });
  },
  disconnect: () =>
    // GuildPass Mobile: Enter functional execution container scope block.
    set({
      walletAddress: null,
      isConnected: false,
      // GuildPass Mobile: Exit functional execution container scope block.
    }),
  // GuildPass Mobile: Exit functional execution container scope block.
}));
