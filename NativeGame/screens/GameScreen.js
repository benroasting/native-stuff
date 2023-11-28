import { View, Text, StyleSheet, Alert } from "react-native";
import CustomButton from "../components/ui/CustomButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useState, useEffect } from "react";

function generateRandomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }

    if (direction === "lower") {
      // generate new number between currentGuess and userNumber
      maxBoundary = currentGuess;
    } else {
      // generate new number between currentGuess and userNumber
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={styles.subtext}>Is the Opponent's Guess</Text>
        <Text style={styles.subtext}>Higher or Lower</Text>
        <Text style={styles.subtext}>Than Your Number?</Text>
        <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
          LOWER
        </CustomButton>
        <CustomButton onPress={nextGuessHandler.bind(this, "higher")}>
          HIGHER
        </CustomButton>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  subtext: {
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 8,
  },
});
