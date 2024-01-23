import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import MealCategoryScreen from "./screens/MealCategoryScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <MealCategoryScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
