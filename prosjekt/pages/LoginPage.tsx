import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import AuthProvider, { useAuth } from "../contexts/AuthContextProvider";

export default function LoginPage() {
  const { user, login, logout } = useAuth();
  const [backgroundColor, setBackgroundColor] = useState("blue");

  const onChangeColorPress = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  const handlePress = () => {
    if (user) {
      logout();
      return;
    }

    login({ id: "1", username: "Hauk" });
  };

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      {user && (
        <Text style={styles.desc}>
          Hei, {user.username}! (ID: {user.id})
        </Text>
      )}
      <Button
        color={"red"}
        label={user ? "Logout" : "Login"}
        onPress={handlePress}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    color: "white",
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
