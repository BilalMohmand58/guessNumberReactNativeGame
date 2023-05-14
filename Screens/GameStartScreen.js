import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import Card from "../Components/Card";
import InstructionText from "../Components/InstructionText";
import PrimaryButton from "../Components/PrimaryButton";
import Title from "../Components/Title";
import Colors from "../constants/Colors";

function GameStartScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { height, width } = useWindowDimensions();
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Input", "input should be number & > 99", [
        { text: "okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(choosenNumber);
  }

  const marginTopDistance = height < 450 ? 50 : 100;
  return (
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.btnsContainer}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Play</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
export default GameStartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.secondary500,
    fontSize: 32,
    height: 50,
    marginVertical: 16,
    fontFamily: "open-sans-bold",
    color: Colors.secondary500,
    width: 50,
    textAlign: "center",
  },
  btnsContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  btnContainer: {
    flex: 1,
  },
});
