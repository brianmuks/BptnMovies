import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useWindowDimensions} from 'react-native';

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

export const WelcomeView = ({}) => {
  const {height, width} = useWindowDimensions();

  return <React.Fragment></React.Fragment>;
};

export const WelcomeScreen = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={WelcomeView}
      />
    </Stack.Navigator>
  );
};

export default WelcomeScreen;
