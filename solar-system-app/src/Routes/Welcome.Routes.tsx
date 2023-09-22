import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeRoutes from ".";
import Welcome from "../pages/Welcome";
const { Navigator, Screen } = createStackNavigator();

const WelcomeRoutes: React.FC = () => {
  const noHeader = { headerShown: false };
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="Welcome" component={Welcome} options={noHeader} />
        <Screen name="HomeRoutes" component={HomeRoutes} options={noHeader} />
      </Navigator>
    </NavigationContainer>
  );
};

export default WelcomeRoutes;
