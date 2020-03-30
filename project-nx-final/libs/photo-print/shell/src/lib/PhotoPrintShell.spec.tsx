import React from 'react';
import { render } from '@testing-library/react';

import PhotoPrintShell from './PhotoPrintShell';

describe(' PhotoPrintShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhotoPrintShell />);
    expect(baseElement).toBeTruthy();
  });
});
