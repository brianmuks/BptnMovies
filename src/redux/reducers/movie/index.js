import {createSlice} from '@reduxjs/toolkit';

const movieRtkSlice = createSlice({
  name: 'movieRtkSlice',
  initialState: {
    movies: [],
    likedMoviesIds: {},
  },

  reducers: {
    setMovies: (state, action) => {
      return {
        ...state,
        movies: action.payload.movies,
      };
    },
    likeMovie: (state, action) => {
      return {
        ...state,
        likedMoviesIds: {
          ...state.likedMoviesIds,
          [action.payload.movieId]: action.payload.movie,
        },
      };
    },
    unLikeMovie: (state, action) => {
      let newLikeMovies = {...state.likedMoviesIds};
      delete newLikeMovies[action.payload.movieId];

      return {
        ...state,
        likedMoviesIds: newLikeMovies,
      };
    },
  },
});

export default movieRtkSlice;
