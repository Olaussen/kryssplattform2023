import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Gradients } from "../../Styles/StyleGuide";
import { Category } from "../../data";

interface ICategoryButtonProps {
  category: Category;
}
const CategoryButton: React.FC<ICategoryButtonProps> = ({ category }) => {
  const { gradient, label, Icon } = category;
  const GradientColor = Gradients[gradient];

  const handleCategoryPress = () => {
    console.log("Navigate to category");
  };

  return (
    <TouchableOpacity onPress={handleCategoryPress}>
      <GradientColor className="justify-center items-center w-20 h-20 rounded-md">
        <Icon />
        <Text className="text-white mt-2">{label}</Text>
      </GradientColor>
    </TouchableOpacity>
  );
};

export default CategoryButton;
