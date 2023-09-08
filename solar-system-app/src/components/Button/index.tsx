import React, { FunctionComponent } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SvgProps } from "react-native-svg";
import { Fonts, Gradients } from "../../Styles/StyleGuide";

interface IButtonProps {
  title: string;
  Icon?: FunctionComponent<SvgProps>;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<IButtonProps> = ({ title, Icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Gradients.button style={styles.gradient}>
        <Text style={[Fonts.buttonTitle(), { color: "#fff" }]}>{title}</Text>
        {Icon && <Icon />}
      </Gradients.button>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 16,
    flexDirection: "row",
    marginTop: 16
  },
});

export default Button;
