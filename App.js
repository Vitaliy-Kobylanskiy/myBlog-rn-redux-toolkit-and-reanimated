import React from 'react';
import { Provider } from 'react-redux';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { AppNavigation } from './scr/navigation/AppNavigation';
import { getFonts } from './scr/usedFonts';
import { store } from './scr/store/index';
import { THEME } from './scr/theme';


export default function App() {
  const [fontsLoaded] = getFonts();

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <Provider store={store}>
      <StatusBar style="auto" backgroundColor={THEME.MAIN_COLOR} />
      <AppNavigation />
    </Provider>
  );
}


