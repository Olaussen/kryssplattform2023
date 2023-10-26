import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome";
import HomeRoutes from "./index";
const { Navigator, Screen } = createStackNavigator();

const WelcomeRoutes: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="HomeRoutes"
          component={HomeRoutes}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default WelcomeRoutes;
