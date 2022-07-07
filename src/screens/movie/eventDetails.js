import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, ScrollView, StatusBar, useWindowDimensions} from 'react-native';
import {Avatar, Button, Card, Paragraph, Text, Title} from 'react-native-paper';
import {UseLikedMovie} from '../../useHooks/movie';
import {
  __getMovieImageUrl,
  __likeMovie,
  __unLikeMovie,
} from '../../logic/movie';
import {PRIMARY_COLOR} from '../../styles/color';
import Icon from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

export const MovieDetailsScreen = ({navigation, route}) => {
  const {movie} = route.params;

  function LogoTitle() {
    return (
      <Image
        style={{
          resizeMode: 'cover',
          // width: '100%',
          height: 100,
          // position: 'absolute',
        }}
        source={{
          uri: __getMovieImageUrl({imagePath: movie.backdrop_path}),
        }}
      />
    );
  }

  navigation.setOptions({
    trnsparent: true,
    headerShown: true,
    headerTintColor: 'white',

    headerBackground: props => <LogoTitle {...props} />,
  });

  const {height, width} = useWindowDimensions();
  const {isMovieLiked} = UseLikedMovie({movie});

  const {likedMovies} = UseLikedMovie({});

  const LeftContent = props => (
    <Avatar.Image
      //   style={{width: 50, height: 50}}
      source={{
        uri: __getMovieImageUrl({imagePath: movie.backdrop_path}),
      }}
      {...props}
    />
  );

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <StatusBar backgroundColor={'transparent'} translucent />

        <Card style={{}}>
          <Card.Title
            // title={movie.original_title}
            subtitle={`Release Date :${movie.release_date}`}
            left={LeftContent}
          />
          <Card.Content>
            <Title>{movie.title}</Title>
            <Paragraph style={{color: 'gray'}}>{movie.overview}</Paragraph>
          </Card.Content>
          <Card.Cover
            source={{uri: __getMovieImageUrl({imagePath: movie.poster_path})}}
          />
          <Card.Actions style={{justifyContent: 'space-between'}}>
            <Icon
              onPress={() =>
                isMovieLiked
                  ? __unLikeMovie({movie, movieId: movie.id})
                  : __likeMovie({movie, movieId: movie.id})
              }
              name={'heart'}
              color={isMovieLiked ? PRIMARY_COLOR : 'gray'}
              size={24}
            />
          </Card.Actions>
        </Card>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MovieDetailsScreen;
