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
import GoalInput from "./components/GoalInput";

export default function App() {
  const [couseGoals, setCoursgoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCoursgoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
  };

  return (
    <View style={styles.screen}>
      {/*onAddGoal 또한 사용자 설정. button에게 props를 주어서 사용할 수 있도록함 */}
      <GoalInput onAddGoal={addGoalHandler} />
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
  }
});
