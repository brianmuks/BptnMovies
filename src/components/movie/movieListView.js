import React from 'react';
import {ScrollView} from 'react-native';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

import MovieOverView from './movieOverView';

const MovieListView = ({movies}) => {
  const rdxMovieData = useSelector(state => state.movieReducer);

  movies = movies || rdxMovieData.movies;

  console.log('movies:', movies);

  const renderMovies = movies.map((i, index) => (
    <MovieOverView key={i.id} movie={i} />
  ));

  return <ScrollView style={{marginBottom: 50}}>{renderMovies}</ScrollView>;
};

export default MovieListView;
