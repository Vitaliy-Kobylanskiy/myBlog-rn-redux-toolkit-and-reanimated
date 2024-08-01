import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BookedScreen } from '../screens/BookedScreen';
import { AppHeaderButtons } from '../components/AppHeaderButtons';
import { StyleSheet, Platform } from 'react-native';
import { THEME } from '../theme';


export const BookedStack = ({ navigation }) => {

	const Stack = createStackNavigator();

	return (
		<Stack.Navigator screenOptions={{
			headerTitleAlign: 'center',
			headerStyle: {
				backgroundColor: Platform.OS === 'ios' ? '#fff' : THEME.MAIN_COLOR,
			},
			headerTitleStyle: {
				fontFamily: 'open-bold',
				color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#CBCBCB',
			}
		}}>
			<Stack.Screen
				name="Booked"
				component={BookedScreen}
				options={{
					title: 'Избранное',
					headerLeft: () => (
						<AppHeaderButtons
							onPress={() => navigation.goBack()}
							iconName='arrow-undo-sharp'
							iconStyle={styles.rightButton} />
					),
				}}
			/>
		</Stack.Navigator>
	)
}

export const styles = StyleSheet.create({
	rightButton: {
		color: Platform.OS === 'android' ? '#CBCBCB' : 'THEME.MAIN_COLOR'
	}
})
