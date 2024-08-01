import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppDrawerNavigation } from './AppDrawerNavigation';
import { THEME } from '../theme';

export const AppNavigation = () => {

	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerStyle: {
					backgroundColor: Platform.OS === 'ios' ? '#fff' : THEME.MAIN_COLOR,
				},
				headerTitleStyle: {
					fontFamily: 'open-bold',
					color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#CBCBCB',
				},
				headerShown: false
			}}>
				<Stack.Screen name='DrawerStack' component={AppDrawerNavigation} />
				
			</Stack.Navigator>
		</NavigationContainer>
	)
}






