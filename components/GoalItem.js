import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalsItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "lightblue",
    borderRadius: 8,
  },
  goalText: {
    fontSize: 16,
    color: "white",
  },
});
