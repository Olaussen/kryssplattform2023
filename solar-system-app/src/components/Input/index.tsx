import { useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Colors, Fonts } from "../../Styles/StyleGuide";

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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.brandBackground,
  },
  input: {
    flex: 1,
    color: "white",
    opacity: 0.6,
    fontSize: 20,
  },
});

export default Input;
