import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enterGoal, setEnteredGoal] = useState("");
  const [couseGoals, setCoursgoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCoursgoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enterGoal }
    ]);
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
      {/*GoalItem의 title에 item을 줌*/}
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={couseGoals}      
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
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
  }
});
