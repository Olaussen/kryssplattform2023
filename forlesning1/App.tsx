import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");

  const onChangeColorPress = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <Text style={styles.desc}>
        Click the button below to change the background to a random color!
      </Text>
      <TouchableOpacity onPress={onChangeColorPress}>
        {/*A button with some padding and text */}
        <View style={styles.button}>
          <Text>Change color</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    width: "80%",
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
