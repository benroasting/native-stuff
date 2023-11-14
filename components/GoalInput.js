import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Please enter a goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="coral" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "gray",
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
    width: "100%",
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  button: {
    width: "50%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
