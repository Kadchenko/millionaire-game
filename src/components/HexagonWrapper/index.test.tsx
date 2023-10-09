import { render, screen } from '@testing-library/react';

import HexagonWrapper from '@components/HexagonWrapper/index';

const Child = () => <div>Child</div>;

describe('HexagonWrapper', () => {
  it('should render children correctly', () => {
    render(
      <HexagonWrapper>
        <Child />
      </HexagonWrapper>,
    );

    screen.getByText('Child');
  });
});
