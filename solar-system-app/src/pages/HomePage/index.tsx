import React from "react";
import { StyleSheet, View } from "react-native";
import Assets from "../../Assets";
import { Colors } from "../../Styles/StyleGuide";
import Header from "../../components/Header";
import CategoryButton from "../../components/CategoryButton";

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Assets.images.BackgroundApp style={styles.bgImage} />
      <Header />
      <CategoryButton />
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
  bgImage: {
    position: "absolute",
    zIndex: 0,
  },
});

export default HomePage;
