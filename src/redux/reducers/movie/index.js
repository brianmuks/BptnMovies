import {createSlice} from '@reduxjs/toolkit';

const movieRtkSlice = createSlice({
  name: 'movieRtkSlice',
  initialState: {
    isProcessing: false,
  },

  reducers: {
    toggleIsProcessing: (state, action) => {
      return {
        ...state,
        isProcessing: !state.isProcessing,
      };
    },
  },
});

export default movieRtkSlice;
