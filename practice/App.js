import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
export default function App() {
  const [enterGoal, setEnteredGoal] = useState("");
  const [couseGoals, setCoursgoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCoursgoals(currentGoals => [...couseGoals, enterGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your Bucket list"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enterGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {couseGoals.map(goal => (
          <View style={styles.listItem}>
            <Text key={goal}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    padding: 10,
    width: "80%",
    borderColor: "black",
    borderWidth: 1
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
