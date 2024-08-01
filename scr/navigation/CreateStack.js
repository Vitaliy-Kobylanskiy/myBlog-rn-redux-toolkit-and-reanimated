import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateScreen } from '../screens/CreateScreen';
import { StyleSheet, Platform } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { THEME } from '../theme';
import { AppHeaderButtons } from '../components/AppHeaderButtons';




export const CreateStack = ({ navigation }) => {

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
				name="Create"
				component={CreateScreen}
				options={{
					title: 'Создать пост',
					headerLeft: () => (
						<AppHeaderButtons
							onPress={() => {
								navigation.dispatch(DrawerActions.toggleDrawer());
							}}
							iconName='menu'
							iconStyle={styles.rightButton} />
					),
				}}
			/>
		</Stack.Navigator>
	)
}

const styles = StyleSheet.create({
	rightButton: {
		color: Platform.OS === 'android' ? '#CBCBCB' : THEME.MAIN_COLOR
	}
})

