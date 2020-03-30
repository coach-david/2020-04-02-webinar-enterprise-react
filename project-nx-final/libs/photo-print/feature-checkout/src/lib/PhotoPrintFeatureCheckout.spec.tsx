import React from 'react';
import { render } from '@testing-library/react';

import PhotoPrintFeatureCheckout from './PhotoPrintFeatureCheckout';

describe(' PhotoPrintFeatureCheckout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhotoPrintFeatureCheckout />);
    expect(baseElement).toBeTruthy();
  });
});
