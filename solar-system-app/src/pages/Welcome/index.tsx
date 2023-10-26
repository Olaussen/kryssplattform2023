import React from "react";
import { Text, View } from "react-native";
import Assets from "../../Assets";
import Button from "../../components/Button";
import useOwnNavigation from "../../hooks/useOwnNavigation";

const Welcome: React.FC = () => {
  const { navigate } = useOwnNavigation();

  const handleOnPressWelcome = () => {
    navigate("HomeRoutes");
  };

  return (
    <View className="justify-center items-center bg-brand flex-1">
      <Assets.images.BackgroundApp className="absolute z-0" />
      <Text className="text-white text-center opacity-70">Welcome!</Text>
      <Text className="text-white content-center w-10/12 text-center text-3xl font-bold">
        Let's journey through our solar system
      </Text>
      <Text className="text-white mt-[45%] text-md">
        Press the button below to embark!
      </Text>
      <Button
        label="Continue"
        Icon={Assets.icons.Forward}
        onPress={handleOnPressWelcome}
      />
    </View>
  );
};

export default Welcome;
