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
    <View className="w-96 bg-system-brand h-auto rounded-lg overflow-hidden my-3 flex-row">
      <PlanetImage width={200} height={200} className="bottom-8 right-10" />
      <View  className="left-[-30] w-[41%] mr-24 ml-2 justify-center">
        <View className="flex-row justify-between items-center">
          <Text className="text-white" style={Fonts.homeTitle()}>
            {planetName}
          </Text>
          <TouchableOpacity>
            <Assets.icons.Save width={24} height={24} />
          </TouchableOpacity>
        </View>
        <Text className="text-white opacity-[0.6] h-[100]">{planetInfo}</Text>
        <TouchableOpacity className="flex-row mt-2 items-center">
          <Text className="text-white">Continue reading...</Text>
          <Assets.icons.OrangeForward
            width={16}
            height={16}
            className="ml-2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailPlanetCard;
