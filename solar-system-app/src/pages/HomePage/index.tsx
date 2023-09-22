import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Assets from "../../Assets";
import { Colors } from "../../Styles/StyleGuide";
import Header from "../../components/Header";
import CategoryButton from "../../components/CategoryButton";
import PlanetCard from "../../components/PlanetCard";

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Assets.images.BackgroundApp style={styles.bgImage} />
      <Header />
      <View>
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
      <View>
        <PlanetCard label="Mercury" PlanetImage={Assets.images.Mercury} />
        <PlanetCard label="Venus" PlanetImage={Assets.images.Venus} />
        <PlanetCard label="Earth" PlanetImage={Assets.images.Earth} />
        <PlanetCard label="Mars" PlanetImage={Assets.images.Mars} />
        <PlanetCard label="Jupiter" PlanetImage={Assets.images.Jupiter} />
        <PlanetCard label="Saturn" PlanetImage={Assets.images.Saturn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brandBackground,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  categoryList: {
    flexDirection: "row",
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
});

export default HomePage;
