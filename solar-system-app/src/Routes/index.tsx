import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomePage from "../pages/HomePage";


const Tab = createBottomTabNavigator();
const HomeRoutes: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Start">
      <Tab.Screen name="Start" component={HomePage} />
      <Tab.Screen name="Search" component={HomePage} />
      <Tab.Screen name="Favorites" component={HomePage} />
      <Tab.Screen name="DetailPage" component={HomePage} />
    </Tab.Navigator>
  );
};

export default HomeRoutes;
