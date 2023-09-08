import React from "react";
import { Text, View } from "react-native";
import WelcomeRoutes from './src/Routes/Welcome.Routes'
import Button from "./src/components/Button";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from "@expo-google-fonts/roboto";



export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  })

  if (fontsLoaded) {
    return null
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="MyButton" Icon={() => <></>} />
      <Text>Hello There!</Text>
    </View>
  );
}
