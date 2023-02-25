import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from './store';

// Type for our state
export interface HomeScreenState {
  isCLI: boolean;
}

// Initial state
const initialState: HomeScreenState = {
  isCLI: true,
};

// Actual Slice
export const homepageSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setIsCLI(state, action) {
      state.isCLI = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.isCLI,
      };
    },
  },
});

export const { setIsCLI } = homepageSlice.actions;

export const selectIsCLI = (state: AppState) => state.auth.isCLI;

export default homepageSlice.reducer;
