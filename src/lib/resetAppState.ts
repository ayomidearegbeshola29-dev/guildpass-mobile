import { queryClient } from "./queryClient";
import { asyncStoragePersister } from "./queryPersister";
import { useWalletStore } from "../features/wallet/wallet.store";

export async function resetAppState(): Promise<void> {
  useWalletStore.getState().disconnect();
  queryClient.clear();
  await asyncStoragePersister.removeClient();
}
