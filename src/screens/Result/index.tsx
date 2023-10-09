import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { startGame } from '@store/game/slice';
import handLikeImage from '@assets/images/hand-like.svg';
import { resultSelector } from '@store/game/selectors';

import styles from './index.module.scss';

const ResultScreen = () => {
  const result = useSelector(resultSelector);
  const dispatch = useDispatch();
  const handleTryAgain = () => dispatch(startGame());

  return (
    <div className={classNames(styles.wrapper, 'container')}>
      <img className={styles.handLikeImage} src={handLikeImage} alt="hand like" />
      <div className={styles.caption}>
        <p className={styles.title}>Total score:</p>
        <h1>${result} earned</h1>
      </div>
      <button className={classNames('button', styles.startButton)} onClick={handleTryAgain}>
        Try again
      </button>
    </div>
  );
};

export default ResultScreen;
