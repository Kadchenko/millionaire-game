import { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';
import Levels from '@screens/Game/Board/Levels';
import { isBoardMenuOpenSelector } from '@store/ui/selectors';
import { toggleIsBoardMenuOpen } from '@store/ui/slice';

import styles from './index.module.scss';

const GameBoard = () => {
  const isOpen = useSelector(isBoardMenuOpenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const handleClose = () => dispatch(toggleIsBoardMenuOpen(false));

  return (
    <div className={classNames(styles.board, isOpen && styles.open)}>
      <button className={styles.board__closeButton} onClick={handleClose}>
        <CloseIcon />
      </button>
      <Levels />
    </div>
  );
};

export default GameBoard;
