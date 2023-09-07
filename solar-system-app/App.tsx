import React from "react";

import { Text, View } from "react-native";

export default function App() {
  const message = "message!";

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello There!</Text>
      <Text>{message}</Text>
    </View>
  );
}
