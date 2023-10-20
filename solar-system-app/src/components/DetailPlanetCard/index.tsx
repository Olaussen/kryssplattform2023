import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Assets from "../../Assets";
import { Colors, Fonts } from "../../Styles/StyleGuide";
import { SvgProps } from "react-native-svg";

type DetailPlanetCardProps = {
  planetName: string;
  PlanetImage: React.FC<SvgProps>;
  planetInfo: string;
};

const DetailPlanetCard: React.FC<DetailPlanetCardProps> = ({
  planetName,
  PlanetImage,
  planetInfo,
}) => {
  return (
    <View className="w-[95%] bg-system-brand m-2 h-auto rounded-lg overflow-hidden my-3 flex-row">
      <PlanetImage width={200} height={200} className="bottom-8 right-10" />
      <View className="right-5 w-1/2 mr-18 justify-center h-40">
        <View className="flex-row justify-between items-center">
          <Text style={[Fonts.homeTitle()]} className="text-white">
            {planetName}
          </Text>
          <TouchableOpacity>
            <Assets.icons.Save />
          </TouchableOpacity>
        </View>
        <Text className="text-white opacity-60 h-100">{planetInfo}</Text>
        <TouchableOpacity className="flex-row mt-3 w-9/12 items-center justify-between">
          <Text className="text-white">Continue reading...</Text>
          <Assets.icons.OrangeForward className="ml-1" height={16} width={16} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailPlanetCard;
