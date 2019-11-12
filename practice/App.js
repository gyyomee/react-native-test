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
      <FlatList
        data={couseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
