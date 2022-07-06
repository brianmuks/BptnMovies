import {useSelector} from 'react-redux';
import {THEMOVIEDB_IMAGE_BASE_URL} from '../../config';
import movieRtkSlice from '../../redux/reducers/movie';
import reduxStore from '../../redux/store';

/*store the movies in redux
 *
 * @param {Object} movies
 */
export const __setMovies = async ({movies}) => {
  reduxStore.dispatch(
    movieRtkSlice.actions.setMovies({
      movies,
    }),
  );
};

export const __likeMovie = async ({movieId, movie}) => {
  reduxStore.dispatch(
    movieRtkSlice.actions.likeMovie({
      movie,
      movieId,
    }),
  );
};

export const __unLikeMovie = async ({movieId, movie}) => {
  reduxStore.dispatch(
    movieRtkSlice.actions.unLikeMovie({
      movie,
      movieId,
    }),
  );
};

export const __getMovieImageUrl = ({imagePath}) =>
  `${THEMOVIEDB_IMAGE_BASE_URL}${imagePath}`;

export const __getLikedMovies = ({}) => {
  // let {likedMoviesIds, movies} = reduxStore.getState().movieReducer;
  let {likedMoviesIds, movies} = useSelector(state => state.movieReducer);

  likedMoviesIds = Object.keys({...likedMoviesIds});

  return movies.filter(movie => likedMoviesIds.includes(movie.id));
};
