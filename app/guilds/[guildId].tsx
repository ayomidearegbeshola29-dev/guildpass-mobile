// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { View, Text, ScrollView } from "react-native";
// GuildPass Mobile: Import package module dependencies.
import { useLocalSearchParams } from "expo-router";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { useWallet } from "../../src/features/wallet/useWallet";
// GuildPass Mobile: Import package module dependencies.
import { useGuilds } from "../../src/features/guilds/useGuilds";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { useMembership } from "../../src/features/membership/useMembership";
// GuildPass Mobile: Import package module dependencies.
import { AppHeader } from "../../src/components/AppHeader";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { LoadingState } from "../../src/components/LoadingState";
// GuildPass Mobile: Import package module dependencies.
import { ErrorState } from "../../src/components/ErrorState";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { Card } from "../../src/components/Card";
// GuildPass Mobile: Import package module dependencies.
import { RoleBadge } from "../../src/components/RoleBadge";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import React from "react";

// GuildPass Mobile: Core mobile screen or hook export definition.
export default function GuildDetail() {
  // GuildPass Mobile: Local UI-scoped constant or state representation.
  const { guildId } = useLocalSearchParams<{ guildId: string }>();
  // GuildPass Mobile: Variable binding and property initialization.
  const { walletAddress } = useWallet();
  // GuildPass Mobile: Local UI-scoped constant or state representation.
  const { getGuild, getRoles } = useGuilds();
  // GuildPass Mobile: Variable binding and property initialization.
  const { getMembership } = useMembership(walletAddress);

  // GuildPass Mobile: Validate guildId parameter
  if (!guildId || typeof guildId !== "string") {
    return <ErrorState message="Invalid guild ID provided" />;
  }

  // GuildPass Mobile: Local UI-scoped constant or state representation.
  const { data: guild, isLoading: guildLoading, error: guildError } = getGuild(guildId);
  // GuildPass Mobile: Variable binding and property initialization.
  const { data: membership, isLoading: memLoading } = getMembership(guildId);
  // GuildPass Mobile: Local UI-scoped constant or state representation.
  const { data: roles, isLoading: rolesLoading } = getRoles(guildId);

  // GuildPass Mobile: Validate screen variables or params before routing.
  if (guildLoading || memLoading || rolesLoading) {
    // GuildPass Mobile: Return evaluated JSX layout or callback response.
    return <LoadingState message="Fetching guild details..." />;
    // GuildPass Mobile: Exit functional execution container scope block.
  }

  // GuildPass Mobile: Evaluate branch condition check for UI guards.
  if (guildError || !guild) {
    // GuildPass Mobile: Terminate block execution context and send back value.
    return <ErrorState message="Failed to load guild details" />;
    // GuildPass Mobile: Exit functional execution container scope block.
  }

  // GuildPass Mobile: Return evaluated JSX layout or callback response.
  return (
    <View className="flex-1 bg-background">
      <AppHeader title={guild.name} showBack />
      <ScrollView className="flex-1 px-4 py-6">
        <Card className="mb-6">
          <Text className="text-2xl font-bold text-text mb-2">{guild.name}</Text>
          <Text className="text-text-muted mb-4">
            {guild.description || "No description provided."}
          </Text>

          <View className="border-t border-border pt-4">
            <View className="flex-row justify-between mb-2">
              <Text className="text-text-muted">Owner</Text>
              <Text className="text-text font-medium" numberOfLines={1}>
                {guild.ownerAddress.substring(0, 6)}...{guild.ownerAddress.substring(38)}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-text-muted">Chain ID</Text>
              <Text className="text-text font-medium">{guild.chainId}</Text>
            </View>
          </View>
        </Card>

        <View className="mb-6">
          <Text className="text-lg font-bold text-text mb-3">Your Membership</Text>
          <Card className={membership?.isActive ? "border-success/30" : ""} accessibilityLabel={`Membership status: ${membership?.isActive ? "Active Member" : "Not a Member"}`}>
            <View className="flex-row justify-between items-center">
              <Text className="text-text font-medium">Status</Text>
              <Text
                className={`font-bold ${membership?.isActive ? "text-success" : "text-text-muted"}`}
              >
                {membership?.isActive ? "Active Member" : "Not a Member"}
              </Text>
            </View>
          </Card>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-bold text-text mb-3">Available Roles</Text>
          <View className="flex-row flex-wrap">
            {roles && roles.length > 0 ? (
              roles.map((role) => <RoleBadge key={role.id} name={role.name} />)
            ) : (
              <Text className="text-text-muted italic">No roles defined for this guild.</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
  // GuildPass Mobile: Exit functional execution container scope block.
}
