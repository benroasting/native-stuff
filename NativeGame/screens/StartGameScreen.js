import { StyleSheet, TextInput, View, Button } from "react-native";

export default function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <TextInput />
      <Button title="Start Game" />
      <Button title="Reset" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
