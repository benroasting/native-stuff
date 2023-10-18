import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsList}>
        <Text style={styles.goalsTitle}>List of Goals ...</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    paddingHorizontal: 16,
  },
  goalsList: {
    flex: 6,
  },
  goalsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
