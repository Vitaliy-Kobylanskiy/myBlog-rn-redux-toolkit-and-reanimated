import React from "react";
import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MainStack } from './MainStack';
import { BookedStack } from './BookedStack';
import { CreateStack } from './CreateStack';
import { AboutStack } from './AboutStack';
import { PostStack } from './PostStack';
import { THEME } from "../theme";

export const AppTabNavigation = () => {

	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator initialRouteName="MainTab" screenOptions={({ route }) => ({
			tabBarIcon: ({ color }) => {
				let iconName;

				if (route.name === 'MainTab') {
					iconName = 'home'
				} else if (route.name === 'BookedTab') {
					iconName = 'bookmark'
				} else if (route.name === 'AboutTab') {
					iconName = 'information-circle-outline'
				} else if (route.name === 'PostTab') {
					iconName = 'file-tray-full'
				} else if (route.name === 'CreateTab') {
					iconName = 'create-outline'
				}

				return <Ionicons name={iconName} size={30} color={color} />;
			},
			tabBarActiveTintColor: THEME.MAIN_COLOR,
			tabBarInactiveTintColor: 'gray',
			headerTitleAlign: 'center',
			headerStyle: {
				backgroundColor: Platform.OS === 'ios' ? '#fff' : THEME.MAIN_COLOR,
			},
			headerTitleStyle: {
				fontFamily: 'open-bold',
				color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#CBCBCB',
			}
		})} >
			<Tab.Screen
				name="MainTab"
				component={MainStack}
				options={{ headerShown: false, title: 'Главная' }}
			/>
			<Tab.Screen
				name="BookedTab"
				component={BookedStack}
				options={{ headerShown: false, title: 'Избранное' }}
			/>
			<Tab.Screen
				name="CreateTab"
				component={CreateStack}
				options={{ headerShown: false, title: 'Создать', tabBarButton: () => null }}
			/>
			<Tab.Screen
				name="AboutTab"
				component={AboutStack}
				options={{ headerShown: false, title: 'О приложении', tabBarButton: () => null }}
			/>
			<Tab.Screen
				name="PostTab"
				component={PostStack}
				options={{ headerShown: false, title: 'Пост', tabBarButton: () => null }}
			/>
		</Tab.Navigator>
	)
}

export const styles = StyleSheet.create({
	rightButton: {
		color: Platform.OS === 'android' ? '#CBCBCB' : 'THEME.MAIN_COLOR'
	}
})


