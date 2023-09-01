import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function App() {

  const handlePress = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.belt}>
        Let's journey through the solar system together!
      </Text>
      <Text style={styles.belt}>Click the button below to embark!</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  title: {
    color: "white",
    maxWidth: "85%",
    alignContent: "center",
    textAlign: "center",
    fontSize: 40,
    
  },
  belt: {
    color: "white",
    textAlign: "center",
    opacity: 0.65,

  },
  button: {
    backgroundColor: "#d23",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
