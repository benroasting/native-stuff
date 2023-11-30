import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "nanum-gothic-extra-bold",
    textAlign: "center",
    marginBottom: 16,
  },
});

export default Title;
