// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { View, Text } from "react-native";
// GuildPass Mobile: Import package module dependencies.
import { useRouter } from "expo-router";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import React from "react";
// GuildPass Mobile: Import package module dependencies.
import { AppHeader } from "../src/components/AppHeader";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { Button } from "../src/components/Button";
// GuildPass Mobile: Import package module dependencies.
import { Card } from "../src/components/Card";

// GuildPass Mobile: Core mobile screen or hook export definition.
export default function DeepLinkError() {
  // GuildPass Mobile: Variable binding and property initialization.
  const router = useRouter();

  // GuildPass Mobile: Terminate block execution context and send back value.
  return (
    <View className="flex-1 bg-background">
      <AppHeader title="Link Error" showBack={false} />
      <View className="flex-1 px-4 py-6 justify-center">
        <Card className="items-center py-8">
          <Text className="text-4xl mb-4">🔗</Text>
          <Text className="text-2xl font-bold text-text mb-3 text-center">
            Invalid Link
          </Text>
          <Text className="text-text-muted text-center mb-6 px-4">
            The link you followed is not supported or is malformed. Please check the URL and try again.
          </Text>
          <Button
            title="Go to Home"
            onPress={() => router.replace("/")}
            className="w-full"
          />
        </Card>
      </View>
    </View>
  );
  // GuildPass Mobile: Exit functional execution container scope block.
}
