import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useWindowDimensions, View} from 'react-native';
import {Text, Title} from 'react-native-paper';
import MovieListView from '../../components/movie/movieListView';
import {__getLikedMovies} from '../../logic/movie';
import {useSelector} from 'react-redux';
import {UseLikedMovie} from '../../useHooks/movie';
import Icon from 'react-native-vector-icons/AntDesign';
import {PRIMARY_COLOR} from '../../styles/color';

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

export const FavouriteView = ({navigation}) => {
  const {height, width} = useWindowDimensions();

  const {likedMovies} = UseLikedMovie({});

  return (
    <React.Fragment>
      <Title style={{color: 'gray', textAlign: 'center'}}>
        Favourite Movies
      </Title>
      {!likedMovies.length ? (
        <View
          style={{
            flex: 1,
            // marginTop: height /2.5,
            alignContent: 'center',
            justifyContent: 'space-around',
          }}>
          <View style={{alignSelf: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
              }}>
              Your favourite movies will be shown here
            </Text>
            <Icon name="heart" size={100} color={PRIMARY_COLOR} />
          </View>
        </View>
      ) : (
        <MovieListView navigation={navigation} movies={likedMovies} />
      )}
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
