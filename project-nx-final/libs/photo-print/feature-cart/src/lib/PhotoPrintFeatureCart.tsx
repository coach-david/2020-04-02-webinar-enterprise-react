import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PhotoPrintFeatureCartProps {}

const StyledPhotoPrintFeatureCart = styled.div`
  color: pink;
`;

export const PhotoPrintFeatureCart = (props: PhotoPrintFeatureCartProps) => {
  return (
    <StyledPhotoPrintFeatureCart>
      <h1>Welcome to photo-print-feature-cart component!</h1>
    </StyledPhotoPrintFeatureCart>
  );
};

export default PhotoPrintFeatureCart;
