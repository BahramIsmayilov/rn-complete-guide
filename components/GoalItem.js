import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GoalItem = (props) => {
	return (
		<TouchableOpacity onPress={() => props.onDelete(props.id)}>
			<View style={styles.listItem}>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItem: {
		borderColor: 'black',
		borderWidth: 1,
		backgroundColor: '#ccc',
		marginTop: 10,
		padding: 5,
	},
});

export default GoalItem;
