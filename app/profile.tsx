// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
// GuildPass Mobile: Import package module dependencies.
import React, { useState } from "react";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { useRouter } from "expo-router";
// GuildPass Mobile: Import package module dependencies.
import { useWallet } from "../src/features/wallet/useWallet";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { AppHeader } from "../src/components/AppHeader";
// GuildPass Mobile: Import package module dependencies.
import { Card } from "../src/components/Card";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { WalletInput } from "../src/components/WalletInput";
// GuildPass Mobile: Import package module dependencies.
import { Button } from "../src/components/Button";

// GuildPass Mobile: Exported screen, component definition, or state hooks.
export default function Profile() {
  // GuildPass Mobile: Variable binding and property initialization.
  const router = useRouter();
  // GuildPass Mobile: Local UI-scoped constant or state representation.
  const { walletAddress, isConnected, connectManually, disconnect } = useWallet();
  // GuildPass Mobile: Variable binding and property initialization.
  const [inputValue, setInputValue] = useState(walletAddress || "");
  // GuildPass Mobile: Local UI-scoped constant or state representation.
  const [error, setError] = useState<string | null>(null);

  // GuildPass Mobile: Variable binding and property initialization.
  const handleConnect = () => {
    const { success, error: validationError } = connectManually(inputValue);
    if (!success) {
      setError(validationError ?? "Invalid address");
      return;
    }
    setError(null);
    router.push("/guilds");
  };

  // GuildPass Mobile: Return evaluated JSX layout or callback response.
  return (
    <View className="flex-1 bg-background">
      <AppHeader title="Profile" />
      <ScrollView className="flex-1 px-4 py-6">
        {!isConnected ? (
          <View>
            <Text className="text-2xl font-bold text-text mb-2">Connect Wallet</Text>
            <Text className="text-text-muted mb-8">
              // GuildPass Mobile: Local UI-scoped constant or state representation. Enter a wallet
              address to view your memberships and roles.
            </Text>
            <Card className="mb-8">
              <WalletInput
                value={inputValue}
                // GuildPass Mobile: Enter functional execution container scope block.
                onChangeText={(text) => {
                  setInputValue(text);
                  setError(null);
                  // GuildPass Mobile: Exit functional execution container scope block.
                }}
                error={error}
              />
              <Button title="Continue" onPress={handleConnect} className="mt-6" />
            </Card>
          </View>
        ) : (
          <View>
            <Card className="mb-6">
              <Text className="text-text-muted text-sm mb-1">CONNECTED WALLET</Text>
              <Text className="text-lg font-bold text-text mb-4" numberOfLines={1}>
                {walletAddress}
              </Text>
              <Button title="Disconnect" onPress={disconnect} variant="outline" />
            </Card>

            <View>
              <TouchableOpacity
                onPress={() => router.push("/guilds")}
                activeOpacity={0.7}
                className="mb-4"
              >
                <Card className="flex-row justify-between items-center">
                  <View>
                    <Text className="text-xl font-bold text-text">My Guilds</Text>
                    <Text className="text-text-muted">View your memberships and roles</Text>
                  </View>
                  <Text className="text-primary text-2xl">→</Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => router.push("/access-check")}
                activeOpacity={0.7}
                className="mb-4"
              >
                <Card className="flex-row justify-between items-center">
                  <View>
                    <Text className="text-xl font-bold text-text">Access Check</Text>
                    <Text className="text-text-muted">Verify resource access status</Text>
                  </View>
                  <Text className="text-primary text-2xl">→</Text>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => router.push("/settings")}
                activeOpacity={0.7}
                className="mb-4"
              >
                <Card className="flex-row justify-between items-center">
                  <View>
                    <Text className="text-xl font-bold text-text">App Settings</Text>
                    <Text className="text-text-muted">Configuration and info</Text>
                  </View>
                  <Text className="text-primary text-2xl">→</Text>
                </Card>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
  // GuildPass Mobile: Exit functional execution container scope block.
}
