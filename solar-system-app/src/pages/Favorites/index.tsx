import React from "react";
import { ScrollView, Text, View } from "react-native";
import Assets from "../../Assets";
import DetailPlanetCard from "../../components/DetailPlanetCard";
import { PLANETS } from "../../data";
import { usePlanetContext } from "../../providers/PlanetContextProvider";

const Favorites: React.FC = () => {
  const { favorites } = usePlanetContext();
  const planets = PLANETS.filter((planet) => favorites.includes(planet.name));

  return (
    <View className="flex-1 bg-brand  pt-10">
      <Assets.images.BackgroundApp className="absolute z-0" />
      <Text className="font-bold text-2xl text-white ml-5">
        Favorite planets
      </Text>
      <ScrollView>
        <View className="items-center">
          {planets.length ? (
            planets.map((planet) => (
              <DetailPlanetCard key={planet.name} planet={planet} />
            ))
          ) : (
            <Text className="text-white text-center mt-10">
              You don't have any favorite planet yet
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Favorites;
