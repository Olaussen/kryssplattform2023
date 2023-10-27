import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";
import { Gradients } from "../../Styles/StyleGuide";

type CategoryButtonProps = {
  label: string;
  color: "blue" | "pink" | "cyan" | "yellow";
  Icon: React.FC<SvgProps>;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({
  label,
  color,
  Icon,
}) => {
  const Gradient = Gradients[color];
  return (
    <TouchableOpacity>
      <Gradient style={styles.container}>
        <Icon className="mb-2" />
        <Text className="text-white" >
          {label}
        </Text>
      </Gradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
  },

});

export default CategoryButton;
