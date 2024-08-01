import React from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const AppHeaderButtons = ({ onPress, iconName, iconStyle }) => {

	return (
		<TouchableOpacity activeOpacity={0.7} onPress={onPress}>
			<View style={styles.wrapButtons}>
				<Ionicons name={iconName} size={25} style={iconStyle} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	wrapButtons: {
		paddingHorizontal: 10
	}
})


