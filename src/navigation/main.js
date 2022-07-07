import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './bottomTabs';
import MovieDetailsScreen from '../screens/movie/eventDetails';

const Stack = createNativeStackNavigator();

const MainNavigation = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="mainBottomTabs" component={BottomTabs} />
      <Stack.Screen
        options={{headerShown: true, title: 'Movie Details'}}
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
      />
    </Stack.Navigator>
  );
};
export default MainNavigation;
