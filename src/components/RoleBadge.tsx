// GuildPass Mobile: Import package module dependencies.
import { View, Text } from "react-native";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import React from "react";

// GuildPass Mobile: Core mobile screen or hook export definition.
export const RoleBadge = ({ name }: { name: string }) => {
  // GuildPass Mobile: Terminate block execution context and send back value.
  return (
    <View className="bg-primary/10 px-3 py-1.5 rounded-lg mr-2 mb-2" accessibilityLabel={`Role: ${name}`}>
      <Text className="text-primary font-medium text-sm">{name}</Text>
    </View>
  );
  // GuildPass Mobile: Exit functional execution container scope block.
};
