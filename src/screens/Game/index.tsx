import Question from '@screens/Game/Question';

import GameBoard from './Board';
import styles from './index.module.scss';

const GameScreen = () => {
  return (
    <div className={styles.gameScreen}>
      <Question />
      <GameBoard />
    </div>
  );
};

export default GameScreen;
