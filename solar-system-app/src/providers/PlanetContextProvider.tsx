import { ReactNode, createContext, useContext, useState } from "react";
import Assets from "../Assets";
import { PLANETS, Planet } from "../data";

<<<<<<< Updated upstream
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
=======
const EARTH: Planet = PLANETS.find((planet) => planet.name === "Earth")!;
>>>>>>> Stashed changes

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