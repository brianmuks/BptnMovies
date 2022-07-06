import {createSlice} from '@reduxjs/toolkit';

const authRtkSlice = createSlice({
  name: 'authRtkSlice',
  initialState: {
    isFirstLaunch: true,
  },

  reducers: {
    setFirstLaunchStatus: (state, action) => {
      return {
        ...state,
        isFirstLaunch: action.payload.isFirstLaunch,
      };
    },
  },
});

export default authRtkSlice;
