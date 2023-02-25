import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { homepageSlice } from './homepageSlice';
import { commandlineSlice } from './commandlineSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [homepageSlice.name]: homepageSlice.reducer,
      [commandlineSlice.name]: commandlineSlice.reducer,
    },

    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
