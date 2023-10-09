import { cloneElement, ReactElement } from 'react';
import classNames from 'classnames';

import './index.scss';

interface Props {
  children: ReactElement;
}

const HexagonWrapper = ({ children }: Props) => {
  return cloneElement(children, {
    className: classNames(children.props.className, 'millionaireHexagon'),
    children: (
      <>
        {children.props.children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="millionaireHexagon__svgHexagon"
          viewBox="0 0 372 70"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M22.5984 5.1487C24.7477 2.23001 28.203 0.5 31.883 0.5H339.119C342.799 0.5 346.254 2.23001 348.404 5.1487L370.386 35L348.404 64.8513C346.254 67.7699 342.799 69.5 339.119 69.5H31.883C28.203 69.5 24.7477 67.7699 22.5984 64.8513L0.615974 35L22.5984 5.1487Z"
            stroke="#D0D0D8"
          />
        </svg>
      </>
    ),
  });
};

export default HexagonWrapper;
