// In App.js in a new project
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {Provider as ReduxProvider} from 'react-redux';
import reduxStore from '../redux/store';
import AuthScreen from '../screens/auth';
import {PRIMARY_RGBA_COLOR} from '../styles/color';

function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={reduxStore}>
        <PaperProvider>
          {/* This `Toast` will show when neither the native stack screen nor `Modal` are presented */}
          <StatusBar animated={true} backgroundColor={PRIMARY_RGBA_COLOR} />

          <AppNavigation />
        </PaperProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <AuthScreen />

      <Toast />
    </NavigationContainer>
  );
}

export default App;
