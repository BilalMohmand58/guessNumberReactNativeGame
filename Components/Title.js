import { Platform, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.secondary500,
    borderColor: Colors.secondary500,
    // Platform specific code here
    borderWidth: Platform.OS === "android" ? 2 : 0, // for andriod only set borderWidth to 2
    padding: Platform.select({ ios: 12, android: 12 }), // other way of writing platform specfic code
    textAlign: "center",
  },
});
