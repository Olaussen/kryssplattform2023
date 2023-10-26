import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Assets from "../../Assets";
import { Planet } from "../../data";
import useOwnNavigation from "../../hooks/useOwnNavigation";
import { usePlanetContext } from "../../providers/PlanetContextProvider";

interface IPlanetCardProps {
  planet: Planet;
}
const PlanetCard: React.FC<IPlanetCardProps> = ({ planet }) => {
  const { name, Image } = planet;
  const { updateCurrentPlanet } = usePlanetContext();
  const { navigate } = useOwnNavigation();

  const handlePlanetPress = () => {
    updateCurrentPlanet(planet);
    navigate("DetailPage");
  };

  return (
    <TouchableOpacity onPress={handlePlanetPress}>
      <View className="bg-brand w-30 h-50 rounded-md overflow-hidden m-1">
        <Image className="bottom-10 right-12" width={164} height={164} />
        <View className="flex-row justify-between items-center mx-4 bottom-4">
          <Text className="text-white">{name}</Text>
          <Assets.icons.OrangeForward width={13} height={13} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlanetCard;
