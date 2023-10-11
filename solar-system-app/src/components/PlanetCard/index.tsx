import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";
import Assets from "../../Assets";
import { Colors } from "../../Styles/StyleGuide";

type PlanetCardProps = {
  label: string;
  PlanetImage: React.FC<SvgProps>;
  onPress?: (planetName: string) => void;
};

const PlanetCard: React.FC<PlanetCardProps> = ({
  label,
  PlanetImage,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress && onPress(label)}>
      <View style={styles.container}>
        <PlanetImage style={styles.image} width={164} height={164} />
        <View style={styles.footer}>
          <Text style={styles.label}>{label}</Text>
          <Assets.icons.OrangeForward
            style={styles.icon}
            width={15}
            height={15}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brandBackground,
    borderRadius: 8,
    width: 140,
    height: 190,
    overflow: "hidden",
    marginRight: 15,
  },
  image: {
    right: 35,
    bottom: 20,
  },
  label: { color: "white", marginLeft: 16 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: 6,
  },
  icon: { marginRight: 8 },
});

export default PlanetCard;
