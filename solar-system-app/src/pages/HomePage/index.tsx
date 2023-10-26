import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Assets from "../../Assets";
import CategoryButton from "../../components/CategoryButton";
import Header from "../../components/Header";
import PlanetCard from "../../components/PlanetCard";
import { CATEGORIES, PLANETS } from "../../data";

const HomePage: React.FC = () => {
  return (
    <View className="flex-1 bg-brand">
      <Assets.images.BackgroundApp className="absolute z-0" />
      <Header home />
      <View className="p-4">
        <Text className="text-white">Categories</Text>
        <View className="flex-row justify-between mt-3">
          {CATEGORIES.map((category, index) => (
            <CategoryButton key={index} category={category} />
          ))}
        </View>
      </View>

      <Text className="text-white pl-4 mt-5">Planets</Text>
      <ScrollView
        horizontal={true}
        decelerationRate="normal"
        className="mt-3 px-3"
      >
        {PLANETS.map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomePage;
