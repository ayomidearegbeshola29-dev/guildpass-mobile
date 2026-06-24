// GuildPass Mobile: Import package module dependencies.
import { View, Text, TextInput } from "react-native";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import React from "react";
// GuildPass Mobile: Import package module dependencies.
import { Card } from "./Card";

// GuildPass Mobile: Enter functional execution container scope block.
type WalletInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string | null;
  // GuildPass Mobile: Exit functional execution container scope block.
};

// GuildPass Mobile: Exported screen, component definition, or state hooks.
export const WalletInput = ({
  value,
  onChangeText,
  placeholder = "0x...",
  error = null,
  // GuildPass Mobile: Enter functional execution container scope block.
}: WalletInputProps) => {
  // GuildPass Mobile: Return evaluated JSX layout or callback response.
  return (
    <View className="w-full">
      // GuildPass Mobile: Local UI-scoped constant or state representation.
      <Text className="text-text-muted mb-2 font-medium">Wallet Address</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        accessibilityLabel="Wallet Address"
        accessibilityHint="Enter your wallet address starting with 0x"
        // GuildPass Mobile: Enter functional execution container scope block.
        className={`bg-white border ${
          error ? "border-error" : "border-border"
          // GuildPass Mobile: Exit functional execution container scope block.
        } rounded-xl p-4 text-text text-lg`}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {error && <Text className="text-error mt-2 text-sm" accessibilityRole="alert">{error}</Text>}
    </View>
  );
  // GuildPass Mobile: Exit functional execution container scope block.
};
