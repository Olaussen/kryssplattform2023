import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Assets from "../Assets";
import { PLANETS, Planet, retrieveFavoritesFromStorage } from "../data";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EARTH: Planet = PLANETS.find((planet) => planet.name === "Earth")!;

type PlanetContextType = {
  currentPlanet: Planet;
  updateCurrentPlanet: (planet: Planet) => void;
  favorites: string[];
  addToFavorites: (planetName: string) => void;
  removeFromFavorites: (planetName: string) => void;
};

const PlanetContext = createContext<PlanetContextType>({
  currentPlanet: EARTH,
  updateCurrentPlanet: (planet: Planet) => {},
  favorites: [],
  addToFavorites: (planetName: string) => {},
  removeFromFavorites: (planetName: string) => {},
});
export const usePlanetContext = () => useContext(PlanetContext);

const PlanetContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentPlanet, setCurrentPlanet] = useState<Planet>(EARTH);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const checkFavorites = async () => {
      const favorites = await retrieveFavoritesFromStorage();
      setFavorites(favorites);
    };
    checkFavorites();
  }, []);

  const addToFavorites = async (planetName: string) => {
    if (favorites.includes(planetName)) return;
    const newFavorites = [...favorites, planetName];
    setFavorites(newFavorites);
    await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFromFavorites = async (planetName: string) => {
    const newFavorites = favorites.filter((item) => item !== planetName);
    setFavorites(newFavorites);
    await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const updateCurrentPlanet = (planet: Planet) => {
    setCurrentPlanet(planet);
  };

  return (
    <PlanetContext.Provider
      value={{
        currentPlanet,
        updateCurrentPlanet,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </PlanetContext.Provider>
  );
};

export default PlanetContextProvider;
