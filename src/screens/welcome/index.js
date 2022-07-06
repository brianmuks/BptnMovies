import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ImageBackground, useWindowDimensions} from 'react-native';
import {Button, Title} from 'react-native-paper';
import {__onViewWelcomeScreen} from '../../logic/auth';
import {styles} from './styles';

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

export const WelcomeView = ({}) => {
  const {height, width} = useWindowDimensions();

  return (
    <React.Fragment>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
        }}
        source={require('../../assets/images/welcome_bkg.jpg')}>
        <Title style={styles.mainTitle}>Welcome to BPTN Movie</Title>
        <Button
          color="#fff"
          style={styles.getStartedBtn}
          icon="login"
          mode="contained"
          onPress={async () => await __onViewWelcomeScreen({})}>
          Get Started
        </Button>
      </ImageBackground>
    </React.Fragment>
  );
};

export const WelcomeScreen = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="WelcomeScreen"
        component={WelcomeView}
      />
    </Stack.Navigator>
  );
};

export default WelcomeScreen;
