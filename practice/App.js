import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [couseGoals, setCoursgoals] = useState([]);
  /* setIsAddMode는 isAddMode의 state를 변경하는 함수 */
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCoursgoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCoursgoals(currentGoals => {
      /* new array 만들때 filter 사용. 같지 않을때만 저장하게 함 */
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      {/*onAddGoal 또한 사용자 설정. button에게 props를 주어서 사용할 수 있도록함 */}
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      {/*GoalItem의 title에 item을 줌*/}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={couseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler.bind(this, itemData.item.id)}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 30
  }
});
