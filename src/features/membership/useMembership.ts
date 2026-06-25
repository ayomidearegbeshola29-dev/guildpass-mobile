// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { useQuery } from "@tanstack/react-query";
// GuildPass Mobile: Import package module dependencies.
import { guildPassClient } from "../../lib/guildpassClient";

// GuildPass Mobile: Exported screen, component definition, or state hooks.
export const useMembership = (walletAddress: string | null) => {
  // GuildPass Mobile: Variable binding and property initialization.
  const getMembership = (guildId: string) => {
    // GuildPass Mobile: Terminate block execution context and send back value.
    return useQuery({
      queryKey: ["membership", walletAddress, guildId],
      queryFn: () =>
        // GuildPass Mobile: Enter functional execution container scope block.
        guildPassClient.membership.getMembership({
          walletAddress: walletAddress!,
          guildId,
          // GuildPass Mobile: Exit functional execution container scope block.
        }),
      enabled: !!walletAddress && !!guildId,
      networkMode: "offlineFirst",
      // GuildPass Mobile: Exit functional execution container scope block.
    });
    // GuildPass Mobile: Exit functional execution container scope block.
  };

  // GuildPass Mobile: Local UI-scoped constant or state representation.
  const getUserRoles = (guildId: string) => {
    // GuildPass Mobile: Return evaluated JSX layout or callback response.
    return useQuery({
      queryKey: ["user-roles", walletAddress, guildId],
      queryFn: () =>
        // GuildPass Mobile: Enter functional execution container scope block.
        guildPassClient.roles.getUserRoles({
          walletAddress: walletAddress!,
          guildId,
          // GuildPass Mobile: Exit functional execution container scope block.
        }),
      enabled: !!walletAddress && !!guildId,
      networkMode: "offlineFirst",
      // GuildPass Mobile: Exit functional execution container scope block.
    });
    // GuildPass Mobile: Exit functional execution container scope block.
  };

  // GuildPass Mobile: Terminate block execution context and send back value.
  return {
    getMembership,
    getUserRoles,
    // GuildPass Mobile: Exit functional execution container scope block.
  };
  // GuildPass Mobile: Exit functional execution container scope block.
};
