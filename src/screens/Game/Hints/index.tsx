import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as PersonQuestionIcon } from '@assets/icons/person-question.svg';
import HintButton from '@screens/Game/Hints/HintButton';
import { currentQuestionSelector, gameSelector } from '@store/game/selectors';
import { applyFiftyFiftyHint, applyFriendCallHint } from '@store/game/slice';

import styles from './index.module.scss';

const Hints = () => {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(currentQuestionSelector);
  const questionsCount = currentQuestion.correctAnswers.length + currentQuestion.incorrectAnswers.length;
  const isFiftyFiftyHintAvailable = questionsCount > 3 && questionsCount % 2 === 0;
  const {
    hints: { fiftyFifty, friendCall },
  } = useSelector(gameSelector);

  const handleFiftyFifty = () => {
    dispatch(applyFiftyFiftyHint());
  };
  const handleCallFriend = () => {
    dispatch(applyFriendCallHint());
  };

  return (
    <div className={styles.hintSection}>
      {isFiftyFiftyHintAvailable && (
        <HintButton onClick={handleFiftyFifty} disabled={fiftyFifty.isDisabled}>
          50/50
        </HintButton>
      )}
      <HintButton onClick={handleCallFriend} disabled={friendCall.isDisabled}>
        <PersonQuestionIcon />
      </HintButton>
    </div>
  );
};

export default Hints;
