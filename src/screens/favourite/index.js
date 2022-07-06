import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useWindowDimensions} from 'react-native';
import {Title} from 'react-native-paper';
import MovieListView from '../../components/movie/movieListView';
import {__getLikedMovies} from '../../logic/movie';
import {useSelector} from 'react-redux';
import {UseLikedMovie} from '../../useHooks/movie';

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

export const FavouriteView = ({}) => {
  const {height, width} = useWindowDimensions();

  const {likedMovies} = UseLikedMovie({});

  console.log('likedMovies:', likedMovies);

  return (
    <React.Fragment>
      <Title>Favourite Movies</Title>
      <MovieListView movies={likedMovies} />
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
