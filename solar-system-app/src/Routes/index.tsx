import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../pages/HomePage";
import Search from "../pages/Search";
import Favorites from "../pages/Favorites";
import { Colors } from "../Styles/StyleGuide";
import Assets from "../Assets";
import DetailPage from "../pages/DetailPage";

const Tab = createBottomTabNavigator();
const HomeRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Start"
      sceneContainerStyle={{ backgroundColor: "red" }}
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ff0",
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarStyle: [
          {
            backgroundColor: Colors.brandBackground,
            borderTopColor: "#000",
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            padding: 10,
            height: 65,
            position: "absolute",
          },
        ],
      }}
    >
      <Tab.Screen
        name="Start"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Assets.icons.Home
              style={{
                opacity: focused ? 0.95 : 0.5,
                marginBottom: focused ? 6 : 0,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Assets.icons.Search
              style={{
                opacity: focused ? 0.95 : 0.5,
                marginBottom: focused ? 6 : 0,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Assets.icons.Save
              style={{
                opacity: focused ? 0.95 : 0.5,
                marginBottom: focused ? 6 : 0,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DetailPage"
        component={DetailPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Assets.icons.Gallery
              style={{
                opacity: focused ? 0.95 : 0.5,
                marginBottom: focused ? 6 : 0,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRoutes;
