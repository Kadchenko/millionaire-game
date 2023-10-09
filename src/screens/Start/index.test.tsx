import { useDispatch } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { startGame } from '@store/game/slice';
import StartScreen from '@screens/Start/index';

jest.mock('react-redux');
jest.mock('@store/game/selectors');

describe('Start', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    render(<StartScreen />);

    screen.getByText('Who wants to be a millionaire?');
  });

  it('should start game on start click', () => {
    render(<StartScreen />);

    screen.getByText('Start').click();
    expect(dispatch).toHaveBeenCalledWith(startGame());
  });
});
