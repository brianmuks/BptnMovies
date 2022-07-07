import React from 'react';

import MovieListView from './movieListView';

const MovieMainView = ({navigation}) => {
  return <MovieListView navigation={navigation} />;
};

export default MovieMainView;

export const LikedMovieIcon = ({}) => {
  return null;
};
