import React, { FunctionComponent } from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SvgProps } from "react-native-svg";
import { Gradients } from "../../Styles/StyleGuide";

interface IButtonProps {
  label: string;
  Icon?: FunctionComponent<SvgProps>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
const Button: React.FC<IButtonProps> = ({ label, Icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Gradients.button className="mt-4 rounded-lg bg-black px-8 py-4 flex-row">
        <View className="items-center flex-row">
          <Text className="text-white font-bold text-lg">{label}</Text>
          {Icon && <Icon className="ml-4" />}
        </View>
      </Gradients.button>
    </TouchableOpacity>
  );
};

export default Button;
