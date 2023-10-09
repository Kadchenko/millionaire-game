import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
  isBoardMenuOpen: boolean;
}

const initialState: UiState = {
  isBoardMenuOpen: false,
};

export const uiSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    toggleIsBoardMenuOpen: (state, action: PayloadAction<boolean | undefined>) => {
      state.isBoardMenuOpen = action.payload ?? !state.isBoardMenuOpen;
    },
  },
});

export const { toggleIsBoardMenuOpen } = uiSlice.actions;

export default uiSlice.reducer;
