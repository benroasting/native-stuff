import { StyleSheet } from 'react-native'

function GoalItem() {
  return (
    <View style={styles.goalsItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  )
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