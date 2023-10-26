import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Assets from "../../Assets";
import useOwnNavigation from "../../hooks/useOwnNavigation";

interface IHeaderProps {
  home?: boolean;
  handleBack?: () => void;
}
const Header: React.FC<IHeaderProps> = ({ home, handleBack }) => {
  const { goBack } = useOwnNavigation();

  const handleBackPress = () => {
    if (handleBack) return handleBack();
    goBack();
  };

  const handleSettingsPress = () => {
    console.log("Navigate to settings");
  };

  return (
    <View className="flex-row justify-between items-center w-fill h-1/5 p-4">
      {home ? (
        <View>
          <View className="flex-row">
            <Text className="text-white font-bold text-3xl">Well met, </Text>
            <Text className="text-pink-600 font-bold text-3xl">friend!</Text>
          </View>
          <Text className="text-white">What are you going to learn today?</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={handleBackPress}>
          <Assets.icons.Back width={24} height={24} />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={handleSettingsPress}>
        <Assets.icons.Settings />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
