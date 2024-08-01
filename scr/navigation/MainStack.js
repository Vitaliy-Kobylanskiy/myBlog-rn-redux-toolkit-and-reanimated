import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, Platform } from 'react-native';
import { THEME } from '../theme';
import { AppHeaderButtons } from '../components/AppHeaderButtons';
import { MainScreen } from '../screens/MainScreen';



export const MainStack = ({ navigation }) => {

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
			},
			
		}}>
			<Stack.Screen
				name="Main"
				component={MainScreen}
				options={{
					title: 'Мой блог',
					headerRight: () => (
						<AppHeaderButtons
							onPress={() => navigation.navigate('CreateDrawer')}
							iconName='camera-sharp'
							iconStyle={styles.rightButton} />
					),
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
};

const styles = StyleSheet.create({
	rightButton: {
		marginRight: 10,
		color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#CBCBCB'
	}
});