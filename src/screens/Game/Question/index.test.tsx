import { useSelector, useDispatch } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { currentQuestionSelector } from '@store/game/selectors';
import { toggleIsBoardMenuOpen } from '@store/ui/slice';

import Question from './index';

jest.mock('react-redux');
jest.mock('@screens/Game/Hints');
jest.mock('@screens/Game/Answers');
jest.mock('@store/game/selectors');

const currentQuestion = {
  question: 'question',
  correctAnswers: ['correct1', 'correct2', 'correct3'],
  incorrectAnswers: ['incorrect'],
};

describe('Question', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation((f) => f());
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
    (currentQuestionSelector as jest.Mock).mockReturnValue(currentQuestion);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    render(<Question />);

    screen.getByText(currentQuestion.question);
  });

  it('should click menu button', () => {
    render(<Question />);

    screen.getByRole('button').click();
    expect(dispatch).toHaveBeenCalledWith(toggleIsBoardMenuOpen());
  });
});
