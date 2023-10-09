import { useSelector, useDispatch } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { toggleIsBoardMenuOpen } from '@store/ui/slice';
import { isBoardMenuOpenSelector } from '@store/ui/selectors';

import Board from './index';

jest.mock('react-redux');
jest.mock('@store/ui/selectors');
jest.mock('@screens/Game/Board/Levels');

describe('Board', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((f) => f());
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
    (isBoardMenuOpenSelector as jest.Mock).mockReturnValue(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should close menu', () => {
    render(<Board />);

    const toggleBtn = screen.getByRole('button');

    toggleBtn.click();
    expect(dispatch).toHaveBeenCalledWith(toggleIsBoardMenuOpen(false));
  });
});
