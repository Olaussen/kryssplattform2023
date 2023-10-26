import React, { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Assets from "../../Assets";

interface IDropDownListItemProps {
  title: string;
  text: string;
}

const DropDownListItem: React.FC<IDropDownListItemProps> = ({
  text,
  title,
}) => {
  const [isCollapsed, setCollapse] = useState(false);

  const handleOnPress = () => {
    setCollapse(!isCollapsed);
  };

  return (
    <View className="my-5">
      <TouchableOpacity
        className="flex-row items-center"
        onPress={handleOnPress}
      >
        <Assets.icons.Down
          width={16}
          height={16}
          className={`mr-4 ${!isCollapsed ? "rotate-0" : "-rotate-90"} rotat`}
        />
        <Text className="font-bold text-lg">{title}</Text>
      </TouchableOpacity>
      <Text className={`ml-8 ${isCollapsed ? "flex" : "hidden"}`}>{text}</Text>
    </View>
  );
};

export default DropDownListItem;
