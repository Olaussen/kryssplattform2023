import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Assets from "../../Assets";
import { Colors, Fonts } from "../../Styles/StyleGuide";
import Button from "../../components/Button";

const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <Assets.images.BackgroundApp style={styles.bgImage} />
      <Text style={[styles.welcome, Fonts.paragraph()]}>Welcome!</Text>
      <Text style={[styles.title, Fonts.homeTitle()]}>
        Let's journey through our solar system
      </Text>
      <Text style={[styles.title, Fonts.paragraph()]}>
        Press the button below to embark
      </Text>
      <Button title="Continue" Icon={Assets.icons.Forward} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brandBackground,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: { position: "absolute", zIndex: 0 },
  welcome: {
    color: "white",
    opacity: 0.65,
  },
  title: { color: "white", maxWidth: "85%", textAlign: "center" },
});

export default Welcome;
