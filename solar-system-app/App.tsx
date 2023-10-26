import React, { createContext, useContext, useState } from "react";

import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import WelcomeRoutes from "./src/Routes/Welcome.Routes";
import PlanetContextProvider from "./src/providers/PlanetContextProvider";

export default function App() {
  const [fontsLoadead] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoadead) {
    return null;
  }

  return (
    <PlanetContextProvider>
      <WelcomeRoutes />
    </PlanetContextProvider>
  );
}
