import React from 'react';
import { render } from '@testing-library/react';

import PhotoPrintFeatureCatalog from './PhotoPrintFeatureCatalog';

describe(' PhotoPrintFeatureCatalog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhotoPrintFeatureCatalog />);
    expect(baseElement).toBeTruthy();
  });
});
