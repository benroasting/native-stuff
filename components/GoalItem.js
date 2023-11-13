import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalsItem}>
      <Pressable
        android_ripple={{ color: "darkblue" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsItem: {
    marginVertical: 5,
    backgroundColor: "lightblue",
    borderRadius: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    fontSize: 16,
    color: "white",
    padding: 10,
  },
});
