import { StyleSheet, View } from "react-native";
import Input from "../../components/Input";
import DetailPlanetCard from "../../components/DetailPlanetCard";
import Assets from "../../Assets";
import { SvgProps } from "react-native-svg";
import { useState } from "react";

export type Planet = {
  planetName: string;
  PlanetImage: React.FC<SvgProps>;
  planetInfo: string;
};

const SearchPage: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([
    {
      planetName: "Mercury",
      PlanetImage: Assets.images.Mercury,
      planetInfo: "test",
    },
  ]);

  return (
    <View style={styles.container}>
      <Input />
      {planets.map((planet) => (
        <DetailPlanetCard
          planetName={planet.planetName}
          PlanetImage={planet.PlanetImage}
          planetInfo={planet.planetInfo}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchPage;
