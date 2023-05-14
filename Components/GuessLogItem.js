import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess : {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    color: Colors.secondary500,
    borderWidth: 1,
    borderColor: Colors.primary500,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
