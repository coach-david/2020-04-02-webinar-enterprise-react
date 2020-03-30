import React from 'react';
import { render } from '@testing-library/react';

import SharedFeatureAuth from './SharedFeatureAuth';

describe(' SharedFeatureAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedFeatureAuth />);
    expect(baseElement).toBeTruthy();
  });
});
