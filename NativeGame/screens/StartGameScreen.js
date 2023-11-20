import { StyleSheet, TextInput, View, Button } from "react-native";
import PrimaryButton from "../components/primaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <TextInput />
      <PrimaryButton>Confirm</PrimaryButton>
      <PrimaryButton>Reset</PrimaryButton>
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
