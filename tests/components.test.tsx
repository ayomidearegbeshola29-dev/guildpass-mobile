// GuildPass Mobile: Import package module dependencies.
import { render, fireEvent } from "@testing-library/react-native";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { Button } from "../src/components/Button";
// GuildPass Mobile: Import package module dependencies.
import { Card } from "../src/components/Card";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import React from "react";
// GuildPass Mobile: Import package module dependencies.
import { describe, it, expect, vi } from "vitest";
// GuildPass Mobile: Pull in react-native, expo, or external state libraries.
import { Text } from "react-native";

// GuildPass Mobile: Mobile unit test assertion block.
describe("Core Components", () => {
  // GuildPass Mobile: Mobile unit test assertion block.
  describe("Button", () => {
    // GuildPass Mobile: Mobile unit test assertion block.
    it("renders correctly and handles press", () => {
      // GuildPass Mobile: Local UI-scoped constant or state representation.
      const onPress = vi.fn();
      // GuildPass Mobile: Variable binding and property initialization.
      const { getByRole, getByText } = render(<Button title="Test Button" onPress={onPress} />);

      const button = getByRole("button", { name: "Test Button" });
      expect(button).toBeDefined();

      fireEvent.press(button);
      expect(onPress).toHaveBeenCalled();
      // GuildPass Mobile: Exit functional execution container scope block.
    });

    // GuildPass Mobile: Mobile unit test assertion block.
    it("shows loading state", () => {
      // GuildPass Mobile: Variable binding and property initialization.
      const { getByRole } = render(<Button title="Loading" onPress={() => {}} loading />);
      const button = getByRole("button", { name: "Loading" });
      expect(button).toBeDefined();
      expect(button.props.accessibilityState?.busy).toBe(true);
    });
    // GuildPass Mobile: Exit functional execution container scope block.
  });

  // GuildPass Mobile: Mobile unit test assertion block.
  describe("Card", () => {
    // GuildPass Mobile: Mobile unit test assertion block.
    it("renders children correctly", () => {
      // GuildPass Mobile: Local UI-scoped constant or state representation.
      const { getByText } = render(
        <Card>
          <Text>Card Content</Text>
        </Card>,
      );
      expect(getByText("Card Content")).toBeDefined();
      // GuildPass Mobile: Exit functional execution container scope block.
    });
    // GuildPass Mobile: Exit functional execution container scope block.
  });
  // GuildPass Mobile: Exit functional execution container scope block.
});
