import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/Colors";

function NumberContainer({ children }) {
  const { height, width } = useWindowDimensions();
  const marginDistance = height < 450 ? 10 : 24;
  const paddingDistance = height < 450 ? 10 : 24;

  return (
    <View
      style={[
        styles.container,
        { margin: marginDistance, padding: paddingDistance },
      ]}
    >
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
//Dimension API gives us width, height and many more info of device the app running
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary500,
    // padding: deviceWidth < 380 ? 12 : 24,
    // margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.secondary500,
    fontSize: deviceWidth < 450 ? 28 : 36,
    fontWeight: "bold",
  },
});
