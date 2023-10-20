import { useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Colors, Fonts } from "../../Styles/StyleGuide";
import Assets from "../../Assets";

type InputProps = {
  onTextChange?: (text: string) => void;
};

const Input: React.FC<InputProps> = ({ onTextChange }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setInputValue(event.nativeEvent.text);
    onTextChange && onTextChange(event.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, Fonts.paragraph()]}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
        placeholderTextColor="white"
      />
      <Assets.icons.Search width={16} height={16} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    height: 50,
    backgroundColor: Colors.brandBackground,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: "white",
    opacity: 0.6,
    fontSize: 20,
    marginHorizontal: 10,
  },
});

export default Input;
