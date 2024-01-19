import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import Title from "../components/ui/Title";
import CustomButton from "../components/ui/CustomButton";
import Colors from "../constants/colors";

function GameOver({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.screenContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <CustomButton onPress={onStartNewGame}>Start New Game</CustomButton>
      </View>
    </ScrollView>
  );
}

export default GameOver;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
  summaryText: {
    fontSize: 20,
    fontFamily: "nanum-gothic",
    marginVertical: 16,
    textAlign: "center",
    paddingHorizontal: 24,
  },
  highlight: {
    fontSize: 20,
    color: Colors.redOrange,
    fontFamily: "nanum-gothic-bold",
  },
});
