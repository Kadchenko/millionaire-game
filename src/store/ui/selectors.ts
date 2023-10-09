import { RootState } from '@store';

const isBoardMenuOpenSelector = (state: RootState) => state.ui.isBoardMenuOpen;

export { isBoardMenuOpenSelector };
