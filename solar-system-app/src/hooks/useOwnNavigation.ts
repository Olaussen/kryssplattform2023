import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export type RouteList = {
  Welcome: undefined;
  HomeRoutes: undefined;
  DetailPage: undefined;
  Search: undefined;
  Favorites: undefined;
};
type SolarNavigationProp = NavigationProp<RouteList>;

const useOwnNavigation = () => {
  const navigation = useNavigation<SolarNavigationProp>();

  const navigate = (path: keyof RouteList) => {
    navigation.navigate(path);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return { navigate, goBack };
};

export default useOwnNavigation;
