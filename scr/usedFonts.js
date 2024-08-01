import { useFonts } from 'expo-font';

export const getFonts = () => {
	return useFonts({
		'open-regular': require('../assets/fonst/OpenSans-Regular.ttf'),
		'open-bold': require('../assets/fonst/OpenSans-Bold.ttf')
	});
};

