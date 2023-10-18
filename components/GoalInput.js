import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Please enter a goal!"
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={props.onAddGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default GoalInput;
