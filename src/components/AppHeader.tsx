// GuildPass Mobile: Import package module dependencies.
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import React from "react";
// GuildPass Mobile: Import package module dependencies.
import { useRouter, usePathname } from "expo-router";

// GuildPass Mobile: Enter functional execution container scope block.
type AppHeaderProps = {
  title: string;
  showBack?: boolean;
  // GuildPass Mobile: Exit functional execution container scope block.
};

// GuildPass Mobile: Exposed interface structure for local navigation layouts.
export const AppHeader = ({ title, showBack = false }: AppHeaderProps) => {
  // GuildPass Mobile: Variable binding and property initialization.
  const router = useRouter();

  // GuildPass Mobile: Terminate block execution context and send back value.
  return (
    <SafeAreaView className="bg-white border-b border-border">
      <View className="flex-row items-center px-4 py-3">
        {showBack && (
          <TouchableOpacity onPress={() => router.back()} className="mr-4 p-2" accessibilityRole="button" accessibilityLabel="Go back">
            <Text className="text-primary text-2xl font-bold">←</Text>
          </TouchableOpacity>
        )}
        <Text className="text-xl font-bold text-text flex-1">{title}</Text>
      </View>
    </SafeAreaView>
  );
  // GuildPass Mobile: Exit functional execution container scope block.
};
