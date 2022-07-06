import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './bottomTabs';

const Stack = createNativeStackNavigator();

const MainNavigation = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="mainBottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};
export default MainNavigation;
