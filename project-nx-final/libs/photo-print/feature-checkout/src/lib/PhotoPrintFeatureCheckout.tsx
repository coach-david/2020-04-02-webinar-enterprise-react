import React from 'react';
import { PhotoPrintFeatureCart } from '@project-nx/photo-print/feature-cart';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PhotoPrintFeatureCheckoutProps {}

const StyledPhotoPrintFeatureCheckout = styled.div`
  color: pink;
`;

export const PhotoPrintFeatureCheckout = (
  props: PhotoPrintFeatureCheckoutProps
) => {
  return (
    <StyledPhotoPrintFeatureCheckout>
      <h1>Welcome to photo-print-feature-checkout component!</h1>
      <PhotoPrintFeatureCart></PhotoPrintFeatureCart>
    </StyledPhotoPrintFeatureCheckout>
  );
};

export default PhotoPrintFeatureCheckout;
