import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const AddGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your Bucket list"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.Button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          {/*button을 누르면 onAddGoal function 을 수행함*/}
          <View style={styles.Button}>
            <Button title="ADD" onPress={AddGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

/*function GoalInput(){} 과 같은 function 문법을 사용해도됨 */

const styles = StyleSheet.create({
  inputContainer: {
    /*flexDirection default is coloum이라서 row일때만 입력해줘도됨*/
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    padding: 10,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

/* 파일 생성후 export를 꼭 해주어야지 앱이 작동함 */
export default GoalInput;
