import { ReactNode, createContext, useContext, useState } from "react";
import { SvgProps } from "react-native-svg";
import Assets from "../Assets";

export type Planet = {
  planetName: string;
  PlanetImage: React.FC<SvgProps>;
  planetInfo: string;
};

export const EARTH: Planet = {
  planetName: "Earth",
  PlanetImage: Assets.images.Earth,
  planetInfo: "Earth",
};

type PlanetContextType = {
  currentPlanet: Planet;
  setCurrentPlanet: (planet: Planet) => void;
};

const PlanetContext = createContext<PlanetContextType>({
  currentPlanet: EARTH,
  setCurrentPlanet: () => {},
});

export const usePlanetContext = () => useContext(PlanetContext);

const PlanetContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentPlanet, setCurrentPlanet] = useState<Planet>(EARTH);

  const updateCurrentPlanet = (planet: Planet) => {
    setCurrentPlanet(planet);
  };

  return (
    <PlanetContext.Provider
      value={{ currentPlanet, setCurrentPlanet: updateCurrentPlanet }}
    >
      {children}
    </PlanetContext.Provider>
  );
};

export default PlanetContextProvider;