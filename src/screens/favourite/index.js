import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useWindowDimensions} from 'react-native';
import {Title} from 'react-native-paper';

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

export const FavouriteView = ({}) => {
  const {height, width} = useWindowDimensions();

  return (
    <React.Fragment>
      <Title>FavouriteScreen</Title>
    </React.Fragment>
  );
};

export const FavouriteScreen = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="FavouriteScreen"
        component={FavouriteView}
      />
    </Stack.Navigator>
  );
};

export default FavouriteScreen;
