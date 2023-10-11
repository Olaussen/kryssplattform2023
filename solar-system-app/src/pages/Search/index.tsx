import { ScrollView, StyleSheet, View } from "react-native";
import Input from "../../components/Input";
import DetailPlanetCard from "../../components/DetailPlanetCard";
import Assets from "../../Assets";
import { SvgProps } from "react-native-svg";
import { useState } from "react";
import { Colors } from "../../Styles/StyleGuide";
import {
  Planet,
  usePlanetContext,
} from "../../providers/PlanetContextProvider";

const SearchPage: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>(PLANETS);

  const { currentPlanet } = usePlanetContext();

  const handleSearchChange = (text: string) => {
    const searchValue = text.toLowerCase();
    const searchHit = PLANETS.filter((planet) =>
      planet.planetName.toLowerCase().includes(searchValue)
    );
    setPlanets(searchHit);
  };

  return (
    <View style={styles.container}>
      <Assets.images.BackgroundApp style={styles.bgImage} />
      <Input onTextChange={handleSearchChange} />
      <ScrollView style={styles.planetScroll}>
        {planets.map((planet) => (
          <DetailPlanetCard
            key={planet.planetName}
            planetName={planet.planetName}
            PlanetImage={planet.PlanetImage}
            planetInfo={planet.planetInfo}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brandBackground,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    position: "absolute",
    zIndex: 0,
  },
  planetScroll: {
    marginBottom: 50,
  }
});

const PLANETS: Planet[] = [
  {
    planetName: "Mercury",
    PlanetImage: Assets.images.Mercury,
    planetInfo:
      "Mercury is the closest planet to the Sun and is known for its extreme temperatures.",
  },
  {
    planetName: "Venus",
    PlanetImage: Assets.images.Venus,
    planetInfo:
      'Venus is often called Earth’s "sister planet" due to its similar size and composition.',
  },
  {
    planetName: "Earth",
    PlanetImage: Assets.images.Earth,
    planetInfo:
      "Earth is the only known planet with life and is characterized by its diverse ecosystems.",
  },
  {
    planetName: "Mars",
    PlanetImage: Assets.images.Mars,
    planetInfo:
      'Mars is often called the "Red Planet" and is known for its iron-rich surface.',
  },
  {
    planetName: "Jupiter",
    PlanetImage: Assets.images.Jupiter,
    planetInfo:
      "Jupiter is the largest planet in the solar system and is composed mainly of gas.",
  },
  {
    planetName: "Saturn",
    PlanetImage: Assets.images.Saturn,
    planetInfo:
      "Saturn is famous for its stunning ring system made up of ice and rock particles.",
  },
  {
    planetName: "Uranus",
    PlanetImage: Assets.images.Uranus,
    planetInfo:
      "Uranus is a gas giant with a unique feature: it rotates on its side.",
  },
  {
    planetName: "Neptune",
    PlanetImage: Assets.images.Neptune,
    planetInfo:
      "Neptune is the farthest known planet from the Sun and is a frigid, windy world.",
  },
];

export default SearchPage;
