import { render, screen } from '@testing-library/react';

import AnswerButton, { AnswerButtonProps } from './index';

describe('AnswerButton', () => {
  const sharedProps: AnswerButtonProps = {
    index: 1,
    answer: 'answer',
    isSelected: false,
    isHidden: false,
    disabled: false,
    state: undefined,
    onClick: jest.fn(),
  };

  it('should render correctly', () => {
    render(<AnswerButton {...sharedProps} />);

    screen.getByText('b');
    screen.getByText(sharedProps.answer);

    screen.getByText(sharedProps.answer).click();
    expect(sharedProps.onClick).toHaveBeenCalled();
  });

  it('should not call onClick when pressed if disabled', () => {
    render(<AnswerButton {...sharedProps} disabled />);

    screen.getByText(sharedProps.answer).click();
    expect(sharedProps.onClick).not.toHaveBeenCalled();
  });

  it('should render selected AnswerButton component', () => {
    render(<AnswerButton {...sharedProps} isSelected />);

    expect(screen.getByTestId('answer-button')).toHaveClass('answerButton__selected');
  });

  it('should render hidden AnswerButton component', () => {
    render(<AnswerButton {...sharedProps} isHidden />);

    expect(screen.getByTestId('answer-button')).toHaveClass('answerButton__hidden');
  });

  it('should render correct AnswerButton component', () => {
    render(<AnswerButton {...sharedProps} state="correct" />);

    expect(screen.getByTestId('answer-button')).toHaveClass('answerButton__correct');
  });

  it('should render wrong AnswerButton component', () => {
    render(<AnswerButton {...sharedProps} state="wrong" />);

    expect(screen.getByTestId('answer-button')).toHaveClass('answerButton__wrong');
  });

  it('should call onClick event', () => {
    render(<AnswerButton {...sharedProps} />);

    screen.getByTestId('answer-button').click();
    expect(sharedProps.onClick).toHaveBeenCalled();
  });
});
