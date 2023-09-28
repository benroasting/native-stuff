import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoalText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Please enter a goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsList}>
        <Text>List of Goals ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "gray",
  },
  textInput: {
    borderColor: "darksalmon",
    borderWidth: 2,
    borderRadius: 5,
    width: "80%",
    padding: 10,
  },
  goalsList: {
    flex: 6,
  },
});
