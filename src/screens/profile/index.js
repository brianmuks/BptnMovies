import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useWindowDimensions} from 'react-native';
import {Title} from 'react-native-paper';

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

export const ProfileView = ({}) => {
  const {height, width} = useWindowDimensions();

  return (
    <React.Fragment>
      <Title style={{color: 'gray', textAlign: 'center'}}>ProfileScreen</Title>
    </React.Fragment>
  );
};

export const ProfileScreen = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileScreen"
        component={ProfileView}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
