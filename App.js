import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = (titleGoal) => {
		setCourseGoals((courseGoals) => [...courseGoals, { id: Math.random().toString(), value: titleGoal }]);
	};

	const remouveGoal = (id) => {
		setCourseGoals((courseGoals) => {
			return courseGoals.filter((goal) => goal.id != id);
		});
	};

	const cancelGoalAdditionHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.screen}>
			<Button title='Add New Goal!' onPress={() => setIsAddMode(true)} />
			<GoalInput onAddGoal={addGoalHandler} visible={isAddMode} cancelModal={cancelGoalAdditionHandler} />
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem id={itemData.item.id} onDelete={remouveGoal} title={itemData.item.value} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
		paddingTop: 80,
	},
});
