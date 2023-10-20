import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";
import Assets from "../../Assets";
import { Colors } from "../../Styles/StyleGuide";
import {
  Planet,
  usePlanetContext,
} from "../../providers/PlanetContextProvider";
import useOwnNavigation from "../../hooks/useOwnNavigation";

type PlanetCardProps = {
  label: string;
  PlanetImage: React.FC<SvgProps>;
};

const PlanetCard: React.FC<PlanetCardProps> = ({ label, PlanetImage }) => {
  const { setCurrentPlanet } = usePlanetContext();
  const { navigate } = useOwnNavigation();

  const handlePlanetPress = () => {
    const planet: Planet = {
      planetName: label,
      PlanetImage,
      planetInfo: label,
    };
    setCurrentPlanet(planet);
    navigate("DetailPage");
  };

  return (
    <TouchableOpacity onPress={handlePlanetPress}>
      <View className="bg-system-brand w-140 h-190 overflow-hidden mr-4 rounded-lg">
        <PlanetImage width={164} height={164} className="right-5 bottom-5" />
        <View className="flex-row justify-between items-center bottom-2">
          <Text className="text-white ml-4">{label}</Text>
          <Assets.icons.OrangeForward
            className="mr-2"
            width={15}
            height={15}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default PlanetCard;
