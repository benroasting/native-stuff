import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import { useState } from "react";

import Colors from "../constants/colors";

import CustomButton from "../components/ui/CustomButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

export default function StartGameScreen({ onSelectedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      // show an alert
      return;
    }
    console.log("Valid number!");
    onSelectedNumber(chosenNumber);
  }

  return (
    <View style={styles.screenContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.instructionText}>ENTER A NUMBER</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton onPress={confirmInputHandler}>Confirm</CustomButton>
          </View>
          <View style={styles.button}>
            <CustomButton onPress={resetInputHandler}>Reset</CustomButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instructionText: {
    color: Colors.darkGreen,
    fontFamily: "nanum-gothic-bold",
    fontSize: 16,
  },
  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 8,
    fontSize: 32,
    fontFamily: "nanum-gothic-bold",
    textAlign: "center",
    borderBottomColor: Colors.redOrange,
    borderBottomWidth: 2,
    color: Colors.redOrange,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
  },
});
