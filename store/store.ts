import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { homepageSlice } from './homepageSlice';
import { commandlineSlice } from './commandlineSlice';

const reducers = {
  [homepageSlice.name]: homepageSlice.reducer,
  [commandlineSlice.name]: commandlineSlice.reducer,
};

const reducer = combineReducers(reducers);

const makeStore: MakeStore<any> = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()].filter(Boolean) as any,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
