import React, { useState } from "react";

import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Assets from "../../Assets";

interface IInputProps {
  placeholderText?: string;
  onInputChange?: (text: string) => void;
}

const Input: React.FC<IInputProps> = ({ placeholderText, onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setInputValue(e.nativeEvent.text);
    onInputChange && onInputChange(e.nativeEvent.text);
  };

  return (
    <View className="justify-center items-center bg-brand h-10 rounded-lg overflow-hidden flex-row px-4 pl-1 w-[92%] self-center mt-5">
      <TextInput
        className="mx-4 flex-1 text-white opacity-70 font-xl"
        onChange={handleOnChange}
        selectionColor="#FFF"
        underlineColorAndroid="transparent"
        value={inputValue}
        placeholder={placeholderText}
        placeholderTextColor="#FFFFFF64"
      />
      <Assets.icons.Search width={16} height={16} />
    </View>
  );
};

export default Input;
