import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealCategoryScreen from "./screens/MealCategoryScreen";

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
        </ScreenStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
