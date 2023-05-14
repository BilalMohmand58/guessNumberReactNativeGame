import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GameStartScreen from "./Screens/GameStartScreen";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from "./Screens/GameOverScreen";
import { useState } from "react";
import Colors from "./constants/Colors";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);
  useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  // if (!fontLoaded) {
  //   return <AppLoading />;
  // }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  function gameIsOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
    setGameIsOver(false);
  }
  let screen = <GameStartScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameIsOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        rounds={guessRounds}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary500, Colors.primary600]}
        style={styles.container}
      >
        <ImageBackground
          source={require("./assets/images/dice2.jpg")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
