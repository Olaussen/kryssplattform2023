import { ReactNode, createContext, useContext, useState } from "react";
import Assets from "../Assets";
import { PLANETS, Planet } from "../data";

const EARTH: Planet = PLANETS.find((planet) => planet.name === "Earth")!;

type PlanetContextType = {
  currentPlanet: Planet;
  updateCurrentPlanet: (planet: Planet) => void;
};

const PlanetContext = createContext<PlanetContextType>({
  currentPlanet: EARTH,
  updateCurrentPlanet: (planet: Planet) => {},
});
export const usePlanetContext = () => useContext(PlanetContext);

const PlanetContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentPlanet, setCurrentPlanet] = useState<Planet>(EARTH);

  const updateCurrentPlanet = (planet: Planet) => {
    setCurrentPlanet(planet);
  };

  return (
    <PlanetContext.Provider value={{ currentPlanet, updateCurrentPlanet }}>
      {children}
    </PlanetContext.Provider>
  );
};

export default PlanetContextProvider;
