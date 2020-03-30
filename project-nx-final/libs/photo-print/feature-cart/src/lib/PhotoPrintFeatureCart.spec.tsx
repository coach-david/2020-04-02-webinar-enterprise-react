import React from 'react';
import { render } from '@testing-library/react';

import PhotoPrintFeatureCart from './PhotoPrintFeatureCart';

describe(' PhotoPrintFeatureCart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhotoPrintFeatureCart />);
    expect(baseElement).toBeTruthy();
  });
});
