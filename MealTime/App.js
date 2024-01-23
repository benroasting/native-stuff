import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealCategoryScreen from "./screens/MealCategoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const ScreenStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <ScreenStack.Navigator>
          <ScreenStack.Screen
            name="MealCategories"
            component={MealCategoryScreen}
          />
          <ScreenStack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
        </ScreenStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
