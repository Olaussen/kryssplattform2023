import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RouteList = {
  Welcome: undefined;
  HomeRoutes: undefined;
  DetailPage: undefined;
  Search: undefined;
  Favorites: undefined;
};

type SolarNavigationProps = NavigationProp<RouteList>;

const useOwnNavigation = () => {
  const navigation = useNavigation<SolarNavigationProps>();

  const navigate = (path: keyof RouteList) => {
    navigation.navigate(path);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return { navigate, goBack };
};

export default useOwnNavigation;
