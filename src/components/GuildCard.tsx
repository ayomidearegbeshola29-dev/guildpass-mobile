// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { View, Text, TouchableOpacity } from "react-native";
// GuildPass Mobile: Import package module dependencies.
import React from "react";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { Card } from "./Card";

// GuildPass Mobile: Enter functional execution container scope block.
type GuildCardProps = {
  name: string;
  id: string;
  isActive: boolean;
  roleCount: number;
  onPress: () => void;
  // GuildPass Mobile: Exit functional execution container scope block.
};

// GuildPass Mobile: Exported screen, component definition, or state hooks.
export const GuildCard = ({ name, id, isActive, roleCount, onPress }: GuildCardProps) => {
  // GuildPass Mobile: Terminate block execution context and send back value.
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} accessibilityRole="button" accessibilityLabel={`${name}, ${isActive ? "Active" : "Inactive"}, ${roleCount} roles`}>
      <Card className="mb-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-xl font-bold text-text">{name}</Text>
          <View
            // GuildPass Mobile: Enter functional execution container scope block.
            className={`px-3 py-1 rounded-full ${
              isActive ? "bg-success/10" : "bg-text-muted/10"
              // GuildPass Mobile: Exit functional execution container scope block.
            }`}
          >
            <Text className={`text-xs font-bold ${isActive ? "text-success" : "text-text-muted"}`}>
              {isActive ? "ACTIVE" : "INACTIVE"}
            </Text>
          </View>
        </View>
        <Text className="text-text-muted text-sm mb-4">ID: {id}</Text>
        <View className="flex-row items-center">
          <Text className="text-primary font-semibold">{roleCount} Roles</Text>
          <Text className="text-text-muted mx-2">•</Text>
          <Text className="text-text-muted">Tap to view details</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
  // GuildPass Mobile: Exit functional execution container scope block.
};
