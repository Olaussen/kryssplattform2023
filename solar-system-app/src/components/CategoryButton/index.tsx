import React from "react";
import { View, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { Gradients } from "../../Styles/StyleGuide";

type CategoryButtonProps = {
  label: string;
  color: "blue" | "pink" | "cyan" | "yellow";
  Icon: React.FC<SvgProps>;
};

const CategoryButton: React.FC = () => {
    // const gradient = Gradients[color];
  return (
    <View>
      <Text style={{ color: "white" }}>CategoryButton</Text>
    </View>
  );
};

export default CategoryButton;
