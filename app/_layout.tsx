// GuildPass Mobile: Import package module dependencies.
import { Stack, useURL, useRouter } from "expo-router";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
// GuildPass Mobile: Import package module dependencies.
import { queryClient } from "../src/lib/queryClient";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { View } from "react-native";
import * as Linking from "expo-linking";

// GuildPass Mobile: Deep link handler component
function LinkHandler() {
  const url = useURL();
  const router = useRouter();

  useEffect(() => {
    if (!url) return;

    const parsed = Linking.parse(url);

    // Handle guildpass://guild/{guildId}
    if (parsed.path?.startsWith("guild/")) {
      const guildId = parsed.path.split("/")[1];
      if (guildId) {
        router.replace(`/guilds/${guildId}`);
        return;
      }
    }

    // Handle guildpass://access-check?guildId={id}&resourceId={id}&walletAddress={address}
    if (parsed.path?.startsWith("access-check")) {
      const { guildId, resourceId, walletAddress } = parsed.queryParams || {};
      if (guildId && resourceId) {
        router.replace({
          pathname: "/access-check",
          params: { guildId, resourceId, walletAddress: walletAddress as string },
        });
        return;
      }
    }

    // Handle https://guildpass.xyz/guild/{guildId}
    if (parsed.hostname === "guildpass.xyz" && parsed.path?.startsWith("/guild/")) {
      const guildId = parsed.path.split("/")[2];
      if (guildId) {
        router.replace(`/guilds/${guildId}`);
        return;
      }
    }

    // Handle https://guildpass.xyz/access-check with query params
    if (parsed.hostname === "guildpass.xyz" && parsed.path?.startsWith("/access-check")) {
      const { guildId, resourceId, walletAddress } = parsed.queryParams || {};
      if (guildId && resourceId) {
        router.replace({
          pathname: "/access-check",
          params: { guildId, resourceId, walletAddress: walletAddress as string },
        });
        return;
      }
    }

    // Invalid or unsupported deep link - redirect to error screen
    router.replace("/deep-link-error");
  }, [url, router]);

  return null;
}

// GuildPass Mobile: Core mobile screen or hook export definition.
export default function RootLayout() {
  // GuildPass Mobile: Return evaluated JSX layout or callback response.
  return (
    <QueryClientProvider client={queryClient}>
      <LinkHandler />
      <View className="flex-1 bg-background">
        <Stack
          // GuildPass Mobile: Enter functional execution container scope block.
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#f8fafc" },
            // GuildPass Mobile: Exit functional execution container scope block.
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="profile" />
          <Stack.Screen name="guilds" />
          <Stack.Screen name="guilds/[guildId]" />
          <Stack.Screen name="access-check" />
          <Stack.Screen name="access-scanner" />
          <Stack.Screen name="settings" />
          <Stack.Screen name="deep-link-error" />
        </Stack>
      </View>
    </QueryClientProvider>
  );
  // GuildPass Mobile: Exit functional execution container scope block.
}
