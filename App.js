import { Button, StyleSheet, TextInput, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Please enter a goal!"
        />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of Goals ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderColor: "darksalmon",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
});
