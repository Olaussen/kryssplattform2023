import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Assets from "../../Assets";
import { Colors } from "../../Styles/StyleGuide";
import Header from "../../components/Header";
import CategoryButton from "../../components/CategoryButton";
import PlanetCard from "../../components/PlanetCard";
import { usePlanetContext } from "../../providers/PlanetContextProvider";

const HomePage: React.FC = () => {
  const { currentPlanet, setCurrentPlanet } = usePlanetContext();

  const handlePlanetChange = (planetName: string) => {
    setCurrentPlanet({
      planetName,
      PlanetImage: Assets.images.Earth,
      planetInfo: planetName,
    });
  };

  return (
    <View style={styles.container}>
      <Assets.images.BackgroundApp style={styles.bgImage} />
      <View style={styles.content}>
        <Header />
        <View style={styles.categories}>
          <Text style={styles.textWhite}>Categories</Text>
          <View style={styles.categoryList}>
            <CategoryButton
              label="Planets"
              Icon={Assets.icons.Planets}
              color="blue"
            />
            <CategoryButton
              label="Asteroids"
              Icon={Assets.icons.Asteroids}
              color="pink"
            />
            <CategoryButton
              label="Start"
              Icon={Assets.icons.Stars}
              color="cyan"
            />
            <CategoryButton
              label="Galaxies"
              Icon={Assets.icons.Galaxies}
              color="yellow"
            />
          </View>
        </View>
        <View style={styles.planets}>
          <Text style={styles.textWhite}>Planets</Text>
          <ScrollView horizontal style={styles.scrollView}>
            <PlanetCard label="Mercury" PlanetImage={Assets.images.Mercury} />
            <PlanetCard
              label="Venus"
              PlanetImage={Assets.images.Venus}
              onPress={handlePlanetChange}
            />
            <PlanetCard label="Earth" PlanetImage={Assets.images.Earth} />
            <PlanetCard label="Mars" PlanetImage={Assets.images.Mars} />
            <PlanetCard label="Jupiter" PlanetImage={Assets.images.Jupiter} />
            <PlanetCard label="Saturn" PlanetImage={Assets.images.Saturn} />
            <PlanetCard label="Uranus" PlanetImage={Assets.images.Uranus} />
            <PlanetCard label="Neptune" PlanetImage={Assets.images.Neptune} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brandBackground,
    flex: 1,
  },
  content: {
    padding: 16,
  },
  categories: {
    marginTop: 40,
  },
  categoryList: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  textWhite: {
    color: "white",
    marginBottom: 10,
  },
  bgImage: {
    position: "absolute",
    zIndex: 0,
  },
  scrollView: {
    marginTop: 10,
  },
  planets: {
    marginTop: 35,
  },
});

export default HomePage;
