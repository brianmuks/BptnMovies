import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useWindowDimensions, View} from 'react-native';
import {Title} from 'react-native-paper';
import UseFetchMovies from '../../useHooks/movie';
import MovieMainView from '../../components/movie';

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

export const HomeView = ({}) => {
  const {height, width} = useWindowDimensions();
  const {movies, isError, isLoading} = UseFetchMovies({});

  return (
    <React.Fragment>
      <View>
        <Title style={{color: 'gray', textAlign: 'center'}}>
          BPTN Movies -Now Showing
        </Title>

        <MovieMainView />
      </View>
    </React.Fragment>
  );
};

export const HomeScreen = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeView}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
