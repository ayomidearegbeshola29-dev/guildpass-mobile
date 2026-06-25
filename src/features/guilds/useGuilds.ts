// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { useQuery } from "@tanstack/react-query";
// GuildPass Mobile: Import package module dependencies.
import { guildPassClient } from "../../lib/guildpassClient";

// GuildPass Mobile: Core mobile screen or hook export definition.
export const useGuilds = () => {
  // GuildPass Mobile: Local UI-scoped constant or state representation.
  const getGuild = (guildId: string) => {
    // GuildPass Mobile: Terminate block execution context and send back value.
    return useQuery({
      queryKey: ["guild", guildId],
      queryFn: () => guildPassClient.guilds.getGuild({ guildId }),
      enabled: !!guildId,
      networkMode: "offlineFirst",
      // GuildPass Mobile: Exit functional execution container scope block.
    });
    // GuildPass Mobile: Exit functional execution container scope block.
  };

  // GuildPass Mobile: Variable binding and property initialization.
  const getGuildConfig = (guildId: string) => {
    // GuildPass Mobile: Return evaluated JSX layout or callback response.
    return useQuery({
      queryKey: ["guild-config", guildId],
      queryFn: () => guildPassClient.guilds.getGuildConfig({ guildId }),
      enabled: !!guildId,
      networkMode: "offlineFirst",
      // GuildPass Mobile: Exit functional execution container scope block.
    });
    // GuildPass Mobile: Exit functional execution container scope block.
  };

  // GuildPass Mobile: Local UI-scoped constant or state representation.
  const getRoles = (guildId: string) => {
    // GuildPass Mobile: Terminate block execution context and send back value.
    return useQuery({
      queryKey: ["guild-roles", guildId],
      queryFn: () => guildPassClient.roles.getRoles({ guildId }),
      enabled: !!guildId,
      networkMode: "offlineFirst",
      // GuildPass Mobile: Exit functional execution container scope block.
    });
    // GuildPass Mobile: Exit functional execution container scope block.
  };

  // GuildPass Mobile: Return evaluated JSX layout or callback response.
  return {
    getGuild,
    getGuildConfig,
    getRoles,
    // GuildPass Mobile: Exit functional execution container scope block.
  };
  // GuildPass Mobile: Exit functional execution container scope block.
};
