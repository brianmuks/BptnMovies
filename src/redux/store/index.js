import {configureStore} from '@reduxjs/toolkit';
import movieRtkSlice from '../reducers/movie';
import authRtkSlice from '../reducers/auth';

const reduxStore = configureStore({
  reducer: {
    movieReducer: movieRtkSlice.reducer,
    authReducer: authRtkSlice.reducer,
  },
});

export default reduxStore;
