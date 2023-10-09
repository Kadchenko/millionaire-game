import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import AnswerButton from '@screens/Game/Answers/AnswerButton';
import { currentQuestionStatedAnswersSelector } from '@store/game/selectors';
import { answerQuestion, setPickedAnswer } from '@store/game/slice';

import styles from './index.module.scss';

const Answers = () => {
  const dispatch = useDispatch();
  const currentQuestionStatedAnswers = useSelector(currentQuestionStatedAnswersSelector);

  const handleAnswer = useCallback(
    (answer: string) => () => {
      dispatch(setPickedAnswer(answer));
      setTimeout(() => {
        dispatch(answerQuestion());
        dispatch(setPickedAnswer(null));
      }, 1400);
    },
    [dispatch],
  );

  return (
    <div className={styles.answers}>
      {currentQuestionStatedAnswers.map(
        ({ answer, isSelectedByFriendCall, isHidden, isDisabled, answerState }, index) => (
          <AnswerButton
            key={answer}
            index={index}
            answer={answer}
            isSelected={isSelectedByFriendCall}
            isHidden={isHidden}
            disabled={isDisabled}
            state={answerState}
            onClick={handleAnswer(answer)}
          />
        ),
      )}
    </div>
  );
};

export default Answers;
