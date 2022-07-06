import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {__setMovies} from '../../logic/movie';
import {_fetchMovies} from '../../methods/movie';

const UseFetchMovies = ({}) => {
  //use cached movies if available
  const rdxMovieData = useSelector(state => state.movieReducer);

  const [movies, setMovies] = useState(rdxMovieData.movies);
  const [isError, setErrorStatus] = useState(false);
  const [isLoading, setLoaderStatus] = useState(false);

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovies = async () => {
    //avoid repeated calls
    if (isLoading) return;
    try {
      setLoaderStatus(true);

      const resp = await _fetchMovies({});
      setMovies(resp);
      //store movies in redux
      __setMovies({movies: resp});
      //set to false if for some reason the status was true
      setErrorStatus(false);
      setLoaderStatus(false);
    } catch (error) {
      console.log('fetchMovies:err', error);
      setErrorStatus(true);
      setLoaderStatus(false);
    }
  };
  return {movies, isError, isLoading};
};
export default UseFetchMovies;

export const UseLikedMovie = ({movie = null}) => {
  let {likedMoviesIds} = useSelector(state => state.movieReducer);
  const likedMovies = Object.values(likedMoviesIds);

  return {
    likedMoviesIds,
    likedMovies,
    isMovieLiked: movie ? (likedMoviesIds[movie.id] ? true : false) : null,
  };
};
