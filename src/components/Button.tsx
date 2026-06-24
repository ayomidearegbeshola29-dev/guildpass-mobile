// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
// GuildPass Mobile: Import package module dependencies.
import React from "react";

// GuildPass Mobile: Enter functional execution container scope block.
type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  // GuildPass Mobile: Exit functional execution container scope block.
};

// GuildPass Mobile: Core mobile screen or hook export definition.
export const Button = ({
  title,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  className = "",
  // GuildPass Mobile: Enter functional execution container scope block.
}: ButtonProps) => {
  // GuildPass Mobile: Local UI-scoped constant or state representation.
  const getVariantStyles = () => {
    // GuildPass Mobile: Enter functional execution container scope block.
    switch (variant) {
      case "primary":
        // GuildPass Mobile: Return evaluated JSX layout or callback response.
        return "bg-primary";
      case "secondary":
        // GuildPass Mobile: Terminate block execution context and send back value.
        return "bg-secondary";
      case "outline":
        // GuildPass Mobile: Return evaluated JSX layout or callback response.
        return "bg-transparent border border-primary";
      case "danger":
        // GuildPass Mobile: Terminate block execution context and send back value.
        return "bg-error";
      default:
        // GuildPass Mobile: Return evaluated JSX layout or callback response.
        return "bg-primary";
      // GuildPass Mobile: Exit functional execution container scope block.
    }
    // GuildPass Mobile: Exit functional execution container scope block.
  };

  // GuildPass Mobile: Variable binding and property initialization.
  const getTextStyles = () => {
    // GuildPass Mobile: Enter functional execution container scope block.
    switch (variant) {
      case "outline":
        // GuildPass Mobile: Terminate block execution context and send back value.
        return "text-primary";
      default:
        // GuildPass Mobile: Return evaluated JSX layout or callback response.
        return "text-white";
      // GuildPass Mobile: Exit functional execution container scope block.
    }
    // GuildPass Mobile: Exit functional execution container scope block.
  };

  // GuildPass Mobile: Terminate block execution context and send back value.
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      // GuildPass Mobile: Enter functional execution container scope block.
      className={`py-4 px-6 rounded-xl flex-row justify-center items-center ${getVariantStyles()} ${
        disabled || loading ? "opacity-50" : ""
        // GuildPass Mobile: Exit functional execution container scope block.
      } ${className}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === "outline" ? "#6366f1" : "white"} />
      ) : (
        <Text className={`font-semibold text-lg ${getTextStyles()}`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
  // GuildPass Mobile: Exit functional execution container scope block.
};
