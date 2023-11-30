import { View, Image, StyleSheet } from "react-native";

import Title from "../components/ui/Title";

function GameOver() {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
    marginHorizontal: 65,
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.25,
  },
});
