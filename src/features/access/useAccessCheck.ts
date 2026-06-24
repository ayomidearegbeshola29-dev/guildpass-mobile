// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { useQuery } from "@tanstack/react-query";
// GuildPass Mobile: Import package module dependencies.
import { guildPassClient } from "../../lib/guildpassClient";

// GuildPass Mobile: Exposed interface structure for local navigation layouts.
export const useAccessCheck = (params: {
  walletAddress: string;
  guildId: string;
  resourceId: string;
}) => {
  return useQuery({
    queryKey: ["access-check", params],
    queryFn: () => guildPassClient.access.checkAccess(params),
    enabled: !!params.walletAddress && !!params.guildId && !!params.resourceId,
  });
};
