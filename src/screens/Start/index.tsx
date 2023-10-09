import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { startGame } from '@store/game/slice';
import handLikeImage from '@assets/images/hand-like.svg';

import styles from './index.module.scss';

const StartScreen = () => {
  const dispatch = useDispatch();
  const handleStart = () => dispatch(startGame());

  return (
    <div className={classNames(styles.startScreen, 'container')}>
      <img className={styles.startScreen__handLikeImage} src={handLikeImage} alt="hand like" />
      <h1 className={styles.startScreen__caption}>Who wants to be a millionaire?</h1>
      <button className={classNames(styles.startScreen__startButton, 'button')} onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default StartScreen;
