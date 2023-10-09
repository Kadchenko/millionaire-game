import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import HexagonWrapper from '@components/HexagonWrapper';
import getAlphabetLetter from '@helpers/getAlphabetLetter';

import styles from './index.module.scss';

export type AnswerButtonState = 'wrong' | 'correct';

export interface AnswerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  index: number;
  answer: string;
  state?: AnswerButtonState;
  isSelected?: boolean;
  isHidden?: boolean;
}

const AnswerButton = ({
  className,
  index,
  answer,
  state,
  isSelected,
  isHidden,
  children,
  disabled,
  ...rest
}: AnswerButtonProps) => {
  const variant = getAlphabetLetter(index);

  return (
    <HexagonWrapper>
      <button
        data-testid="answer-button"
        className={classNames(
          className,
          styles.answerButton,
          state && styles[`answerButton__${state}`],
          isSelected && styles.answerButton__selected,
          isHidden && styles.answerButton__hidden,
        )}
        disabled={disabled || isHidden}
        {...rest}
      >
        <span className={styles.answerButton__content}>
          <span className={styles.answerButton__variant}>{variant}</span>
          {answer}
        </span>
      </button>
    </HexagonWrapper>
  );
};

export default AnswerButton;
