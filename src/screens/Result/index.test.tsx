import { useSelector, useDispatch } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { resultSelector } from '@store/game/selectors';
import { startGame } from '@store/game/slice';
import ResultScreen from '@screens/Result/index';

jest.mock('react-redux');
jest.mock('@store/game/selectors');

const result = 100;

describe('Result', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((f) => f());
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
    (resultSelector as jest.Mock).mockReturnValue(result);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with result', () => {
    render(<ResultScreen />);

    screen.getByText('Total score:');
    screen.getByText(`$${result} earned`);
  });

  it('should start game again', () => {
    render(<ResultScreen />);

    screen.getByText('Try again').click();
    expect(dispatch).toHaveBeenCalledWith(startGame());
  });
});
