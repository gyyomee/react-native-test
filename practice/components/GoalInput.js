import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add your Bucket list"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      {/*button을 누르면 onAddGoal function 을 수행함*/}
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

/*function GoalInput(){} 과 같은 function 문법을 사용해도됨 */

const styles = StyleSheet.create({
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

/* 파일 생성후 export를 꼭 해주어야지 앱이 작동함 */
export default GoalInput;
