import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
	const [enterGoal, setEnterGoal] = useState('');

	const goalInputHandler = (text) => {
		setEnterGoal(text);
	};

	const addGoal = () => {
		props.onAddGoal(enterGoal);
		setEnterGoal('');
	};

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Course Goal!!'
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enterGoal}
				/>
				<View style={styles.buttonCotainer}>
					<View style={styles.button}>
						<Button title='Cancel' color='red' onPress={props.cancelModal} />
					</View>
					<View style={styles.button}>
						<Button title='Add' onPress={addGoal} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: '75%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
	},
	buttonCotainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '60%',
	},
	button: {
		width: '40%',
	},
});

export default GoalInput;
