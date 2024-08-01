import React from "react";
import { StyleSheet, View, Text } from 'react-native';

export const AboutScreen = () => {
	return (
		<View>
			<View style={styles.titleWrap}>
				<Text style={styles.titleText}>Функционал приложения:</Text>
			</View>
			<View style={styles.descriptionWrap}>
				<Text style={styles.descriptItem}>- Создание нового поста с помощью камеры </Text>
				<Text style={styles.descriptItem}>- Удаление поста</Text>
				<Text style={styles.descriptItem}>- Добавление и удаление в/из "Избранное", изменение иконки в соответствии с
					добавлением или удалением</Text>
				<Text style={styles.descriptItem}>- Реализован нижний и боковой навигатор для удобства использования</Text>
			</View>
			<View style={styles.titleWrap}>
				<Text style={styles.titleText}>Используемые технологии:</Text>
			</View>
			<View style={styles.descriptionWrap}>
				<Text style={styles.descriptItem}>- Redux</Text>
				<Text style={styles.descriptItem}>- React-navigation/bottom-tabs</Text>
				<Text style={styles.descriptItem}>- React-navigation/drawer</Text>
				<Text style={styles.descriptItem}>- Expo-font</Text>
				<Text style={styles.descriptItem}>- Expo/vector-icons</Text>
				<Text style={styles.descriptItem}>- Expo-image-picker</Text>
			</View>
		</View>
	)
};


const styles = StyleSheet.create({
	titleWrap: {
		alignItems: 'center',
		marginTop: 20,
	},
	titleText: {
		fontFamily: 'open-bold',
		fontSize: 18
	},
	descriptionWrap: {
		paddingHorizontal: 20,
		marginTop: 10,
	},
	descriptItem: {
		fontFamily: 'open-regular',
		fontSize: 16, 
		marginBottom: 7
	}
});




