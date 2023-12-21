import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    padding: 16,
    marginVertical: 15,
    backgroundColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    itemTextmily: "nanum-gothic-bold",
    fontSize: 16,
    color: Colors.darkGreen,
  },
});
