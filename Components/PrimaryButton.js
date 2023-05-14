import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.outterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.btnPressed]
            : styles.innerContainer
        }
        android_ripple={{ color: Colors.secondary600 }}
        onPress={onPress}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: 25,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: Colors.secondary500,
    paddingHorizontal: 16,
    paddingVertical: 10,
    elevation: 2,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
  //   for IOS Button Pressed Effect
  btnPressed: {
    opacity: 0.75,
  },
});
