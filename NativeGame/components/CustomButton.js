import { View, Text, Pressable, StyleSheet } from "react-native";

function CustomButton({ children }) {
  function onPressHandler() {
    console.log("Button pressed");
  }

  return (
    <View style={styles.outerButtonContainer}>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.innerButtonContainer, styles.pressed]
            : styles.innerButtonContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  outerButtonContainer: {
    backgroundColor: "#93C572",
    borderRadius: 20,
    margin: 4,
    overflow: "hidden",
  },
  innerButtonContainer: {
    backgroundColor: "#93C572",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
