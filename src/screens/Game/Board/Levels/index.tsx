import { useSelector } from 'react-redux';

import LevelIndicator from '@screens/Game/Board/Levels/LevelIndicator';
import { gameSelector } from '@store/game/selectors';

import styles from './index.module.scss';

const Levels = () => {
  const { levels, currentQuestionIndex } = useSelector(gameSelector);

  return (
    <ul className={styles.levels}>
      {levels.map((level, index) => (
        <li key={level}>
          <LevelIndicator
            state={currentQuestionIndex === index ? 'active' : index < currentQuestionIndex ? 'passed' : undefined}
          >
            {level}
          </LevelIndicator>
        </li>
      ))}
    </ul>
  );
};

export default Levels;
