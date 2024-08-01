import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { AboutScreen } from '../screens/AboutScreen';
import { StyleSheet, Platform } from 'react-native';
import { THEME } from '../theme';
import { AppHeaderButtons } from '../components/AppHeaderButtons';



export const AboutStack = ({ navigation }) => {

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
				name="About"
				component={AboutScreen}
				options={{
					title: 'О приложении',
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

