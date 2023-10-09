import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { gameSelector } from '@store/game/selectors';

import Levels from './index';

jest.mock('react-redux');
jest.mock('@store/game/selectors');

const levels = [100, 200, 300, 500, 600];
// const currentQuestionIndex = 2;

describe('Levels', () => {
  const dispatch = jest.fn();
  const testListRenderByIndex = (currentQuestionIndex: number) => {
    (gameSelector as jest.Mock).mockImplementationOnce(() => ({ levels, currentQuestionIndex }));

    render(<Levels />);

    const list = screen.getByRole('list');
    const listItems = screen.getAllByTestId('level-indicator');

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(levels.length);

    expect(listItems[currentQuestionIndex]).toHaveClass('active');
    levels.forEach((level, index) => {
      expect(listItems[index]).toHaveTextContent(level.toString());
    });
    for (let i = 0; i < currentQuestionIndex; i++) {
      expect(listItems[i]).toHaveClass('passed');
    }
    for (let i = currentQuestionIndex + 1; i < listItems.length; i++) {
      expect(listItems[i]).not.toHaveClass('passed');
      expect(listItems[i]).not.toHaveClass('active');
    }
  };

  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((f) => f());
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render list correctly with first active element', () => {
    testListRenderByIndex(0);
  });
  it('should render list correctly with third active element', () => {
    testListRenderByIndex(3);
  });
  it('should render list correctly with last active element', () => {
    testListRenderByIndex(levels.length - 1);
  });
});
