import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from './store';

export interface CommandLineState {
  commands: string[];
  responses: string[];
  dirBiscuitCrumbs: string[];
}

const initialState: CommandLineState = {
  commands: [],
  responses: [],
  dirBiscuitCrumbs: [],
};

export const commandlineSlice = createSlice({
  name: 'cli',
  initialState,
  reducers: {
    setCommands(state, action) {
      state.commands = action.payload;
    },
    setResponses(state, action) {
      state.responses = action.payload;
    },
    setDirBiscuitCrumbs(state, action) {
      state.dirBiscuitCrumbs = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.commands,
        ...action.payload.responses,
        ...action.payload.dirBiscuitCrumbs,
      };
    },
  },
});

export const { setCommands } = commandlineSlice.actions;
export const { setResponses } = commandlineSlice.actions;
export const { setDirBiscuitCrumbs } = commandlineSlice.actions;

export const selectCommands = (state: AppState) => state.cli.commands;
export const selectResponses = (state: AppState) => state.cli.responses;
export const selectBiscuitCrumbs = (state: AppState) => state.cli.dirBiscuitCrumbs;

export default commandlineSlice.reducer;
