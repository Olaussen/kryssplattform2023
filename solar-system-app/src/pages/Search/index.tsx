import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Assets from "../../Assets";
import DetailPlanetCard from "../../components/DetailPlanetCard";
import Input from "../../components/Input";
import { PLANETS, Planet } from "../../data";

const Search: React.FC = () => {
  const [displayPlanets, setDisplayPlanets] = useState<Planet[]>(PLANETS);

  const onSearchInputChange = (text: string) => {
    setDisplayPlanets(
      PLANETS.filter((planet) =>
        (planet.name + planet.description)
          .toLowerCase()
          .includes(text.toLowerCase())
      )
    );
  };

  return (
    <View className="flex-1 bg-brand pt-5 h-full mb-10">
      <Assets.images.BackgroundApp className="absolute z-0" />
      <Input placeholderText="Search..." onInputChange={onSearchInputChange} />
      <ScrollView className="my-3">
        <View className="items-center">
          {displayPlanets.map((planet, index) => (
            <DetailPlanetCard key={index} planet={planet} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
