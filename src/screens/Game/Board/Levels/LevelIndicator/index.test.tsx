import { render, screen } from '@testing-library/react';

import LevelIndicator, { LevelIndicatorProps } from './index';

describe('LevelIndicator', () => {
  it('should render correctly', () => {
    const props: LevelIndicatorProps = {};
    render(<LevelIndicator {...props}>500</LevelIndicator>);

    screen.getByText('500');
  });
  it('should render passed state', () => {
    const props: LevelIndicatorProps = {
      state: 'passed',
    };
    render(<LevelIndicator {...props}>500</LevelIndicator>);

    expect(screen.getByTestId('level-indicator')).toHaveClass('passed');
  });
  it('should render active state', () => {
    const props: LevelIndicatorProps = {
      state: 'active',
    };
    render(<LevelIndicator {...props}>500</LevelIndicator>);

    expect(screen.getByTestId('level-indicator')).toHaveClass('active');
  });
});
