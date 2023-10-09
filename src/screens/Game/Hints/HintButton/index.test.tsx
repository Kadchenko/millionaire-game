import { render, screen } from '@testing-library/react';

import HintButton from './index';

describe('HintButton', () => {
  it('should render correctly', () => {
    render(<HintButton>50/50</HintButton>);

    screen.getByText('50/50');
  });
});
