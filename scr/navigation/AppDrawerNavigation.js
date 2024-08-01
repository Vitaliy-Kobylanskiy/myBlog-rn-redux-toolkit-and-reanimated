import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CreateStack } from "./CreateStack";
import { AboutStack } from "./AboutStack";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { AppTabNavigation } from './AppTabNavigation';



export const AppDrawerNavigation = ({ navigation }) => {

	const Drawer = createDrawerNavigator();

	return (
		<Drawer.Navigator initialRouteName="HomeDrawer" screenOptions={({ route }) => ({
			headerShown: false,
			drawerActiveTintColor: THEME.MAIN_COLOR,
			drawerType: 'slide',
			drawerLabelStyle: {
				fontFamily: 'open-bold'
			},
			drawerIcon: ({ color }) => {
				let iconName;

				if (route.name === 'HomeDrawer') {
					iconName = 'home';
				} else if (route.name === 'CreateDrawer') {
					iconName = 'create-outline';
				} else if (route.name === 'AboutDrawer') {
					iconName = 'information-circle-outline';
				}

				return <Ionicons name={iconName} size={20} color={color} />;
			},
		})}>
			<Drawer.Screen
				name="HomeDrawer"
				component={AppTabNavigation}
				options={{ title: 'Главная' }}
			/>
			<Drawer.Screen
				name="CreateDrawer"
				component={CreateStack}
				options={{ title: 'Создать пост' }}
			/>
			<Drawer.Screen
				name="AboutDrawer"
				component={AboutStack}
				options={{ title: 'О приложении' }}
			/>
		</Drawer.Navigator>
	)
}

