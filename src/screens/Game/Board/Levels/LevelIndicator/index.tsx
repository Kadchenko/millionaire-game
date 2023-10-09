import { HTMLAttributes } from 'react';
import classNames from 'classnames';

import HexagonWrapper from '@components/HexagonWrapper';

import styles from './index.module.scss';

export interface LevelIndicatorProps extends HTMLAttributes<HTMLElement> {
  state?: 'active' | 'passed';
}

const LevelIndicator = ({ state, className, children, ...rest }: LevelIndicatorProps) => {
  return (
    <HexagonWrapper>
      <div
        {...rest}
        data-testid="level-indicator"
        className={classNames(className, styles.levelIndicator, state && styles[state])}
      >
        <span className={styles.levelIndicator__content}>{children}</span>
      </div>
    </HexagonWrapper>
  );
};

export default LevelIndicator;
