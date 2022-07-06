import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {Avatar, Button, Card, Paragraph, Text, Title} from 'react-native-paper';
import {
  __getMovieImageUrl,
  __likeMovie,
  __unLikeMovie,
} from '../../logic/movie';
import {PRIMARY_COLOR} from '../../styles/color';
import {UseLikedMovie} from '../../useHooks/movie';

const MovieOverView = ({movie}) => {
  const {isMovieLiked} = UseLikedMovie({movie});

  console.log('isMovieLiked:', isMovieLiked);

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
    <Card
      style={{
        margin: 10,
      }}>
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
        <Button color={'gray'} type="text">
          <Text style={{color: 'red', backgroundColor: 'gray'}}></Text>
          Details
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default MovieOverView;
