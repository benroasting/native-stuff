import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CustomButton from "../components/ui/CustomButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

import NumberContainer from "../components/game/NumberContainer";
import GuessLogItem from "../components/game/GuessLogItem";

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
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      {" "}
      <Card>
        <TextInput
          style={styles.subtext}
          editable={false}
          value={"Is That Your Number?"}
        />
        <View style={styles.buttonContainer}>
          <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, "higher")}>
            <Ionicons name="md-add" size={24} color="white" />
          </CustomButton>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <TextInput
          style={styles.subtext}
          editable={false}
          value={"Is That Your Number?"}
        />
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </CustomButton>
            <NumberContainer>{currentGuess}</NumberContainer>
            <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </CustomButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>OPPONENT'S GUESS</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  subtext: {
    fontSize: 16,
    fontFamily: "nanum-gothic",
    textAlign: "center",
    marginBottom: 12,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
