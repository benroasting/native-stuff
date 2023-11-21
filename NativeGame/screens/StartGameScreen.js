import { StyleSheet, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <CustomButton>Confirm</CustomButton>
        </View>
        <View style={styles.button}>
          <CustomButton>Reset</CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#AFE1AF",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 8,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: "#FF7518",
    borderBottomWidth: 2,
    color: "#FF7518",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
  },
});
