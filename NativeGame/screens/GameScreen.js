import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower?</Text>
        <CustomButton>LOWER</CustomButton>
        <CustomButton>HIGHER</CustomButton>
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
});
