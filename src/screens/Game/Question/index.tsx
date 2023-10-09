import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as MenuIcon } from '@assets/icons/menu.svg';
import Hints from '@screens/Game/Hints';
import Answers from '@screens/Game/Answers';
import { currentQuestionSelector } from '@store/game/selectors';
import { toggleIsBoardMenuOpen } from '@store/ui/slice';

import styles from './index.module.scss';

const Question = () => {
  const currentQuestion = useSelector(currentQuestionSelector);
  const dispatch = useDispatch();

  const handleToggleBoardMenu = () => dispatch(toggleIsBoardMenuOpen());

  return (
    <div className={styles.wrapper}>
      <button className={styles.menuToggleButton} onClick={handleToggleBoardMenu}>
        <MenuIcon />
      </button>
      <div className={styles.details}>
        <Hints />
        <h3 className={styles.questionText}>{currentQuestion.question}</h3>
      </div>
      <Answers />
    </div>
  );
};

export default Question;
