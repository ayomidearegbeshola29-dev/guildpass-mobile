import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

function isNetworkOnline(
  isConnected: boolean | null,
  isInternetReachable: boolean | null,
): boolean {
  return !!isConnected && isInternetReachable !== false;
}

export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(isNetworkOnline(state.isConnected, state.isInternetReachable));
    });

    void NetInfo.fetch().then((state) => {
      setIsOnline(isNetworkOnline(state.isConnected, state.isInternetReachable));
    });

    return unsubscribe;
  }, []);

  return {
    isOnline,
    isOffline: !isOnline,
  };
}
