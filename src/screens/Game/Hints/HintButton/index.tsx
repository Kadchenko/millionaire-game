import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

const HintButton = ({ className, ...restProps }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...restProps} className={classNames(className, styles.hintButton)} />
);

export default HintButton;
