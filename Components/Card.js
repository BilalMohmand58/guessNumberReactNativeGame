import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginBottom: 20,
    padding: 16,
    backgroundColor: Colors.primary500,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 5, //for andriod shadow
    // for IOS Shadow
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
