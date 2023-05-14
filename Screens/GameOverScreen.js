import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import Title from "../Components/Title";
import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

function GameOverScreen({ rounds, userNumber, onStartNewGame }) {
  // Landscape oreintation styles
  const { height, width } = useWindowDimensions();
  const marginDistance = height < 450 ? 10 : 36;
  const imageWidth = height < 450 ? 150 : 300;
  const imageHeight = height < 450 ? 150 : 300;

  const paddingDistance = height < 450 ? 10 : 24;
  return (
    <View style={styles.screen}>
      <Title>Game Over</Title>
      <View
        style={[
          styles.imgContainer,
          { margin: marginDistance, width: imageWidth, height: imageHeight },
        ]}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/winner5.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.highlitedText}>{rounds}</Text>{" "}
        rounds to guess <Text style={styles.highlitedText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>
        Play again{"  "}
        <FontAwesome name="repeat" size={15} color="white" />
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;
// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: 200,
    // borderColor: Colors.primary500,
    // margin: 36,
    // borderWidth: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlitedText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
