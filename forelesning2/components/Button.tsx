import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  color: string;
  label: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  color,
  label,
  disabled = false,
  size = "large",
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[size], { backgroundColor: color }]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  small: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  medium: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  large: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  label: {
    color: "#25e",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
