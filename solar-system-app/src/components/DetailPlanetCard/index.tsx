import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Assets from "../../Assets";
import { Planet } from "../../data";
import useOwnNavigation from "../../hooks/useOwnNavigation";
import { usePlanetContext } from "../../providers/PlanetContextProvider";

interface IDetailPlanetCardProps {
  planet: Planet;
}
const DetailPlanetCard: React.FC<IDetailPlanetCardProps> = ({ planet }) => {
  const { name, description, Image } = planet;
  const { updateCurrentPlanet } = usePlanetContext();
  const { navigate } = useOwnNavigation();

  const handleFavoriteSave = () => {
    console.log(`Saved ${name} to favorites`);
  };

  const handleContinueReading = () => {
    updateCurrentPlanet(planet);
    navigate("DetailPage");
  };

  return (
    <View className="w-11/12 bg-brand rounded-lg overflow-hidden my-4 flex-row">
      <Image width={200} height={200} className="bottom-10 right-10" />
      <View className="right-8 ml-6 justify-center w-[43%]">
        <View className="flex-row items-center justify-between">
          <Text className="text-white text-2xl font-bold mb-2">{name}</Text>
          <TouchableOpacity onPress={handleFavoriteSave}>
            <Assets.icons.Save />
          </TouchableOpacity>
        </View>
        <Text className="text-white opacity-70">{description}</Text>
        <TouchableOpacity
          className="flex-row mt-5 items-center"
          onPress={handleContinueReading}
        >
          <Text className="mr-3 text-white">Continue reading...</Text>
          <Assets.icons.OrangeForward width={14} height={14} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailPlanetCard;
