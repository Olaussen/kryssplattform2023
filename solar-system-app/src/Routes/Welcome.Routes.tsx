import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeRoutes from ".";
import { Button, Text, View } from "react-native";
const { Navigator, Screen } = createStackNavigator();

const Welcome: React.FC = () => {
  return (
    <View>
      <Text>Hey</Text>
    </View>
  );
};

const WelcomeRoutes: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="HomeRoutes" component={HomeRoutes} />
      </Navigator>
    </NavigationContainer>
  );
};

export default WelcomeRoutes;
