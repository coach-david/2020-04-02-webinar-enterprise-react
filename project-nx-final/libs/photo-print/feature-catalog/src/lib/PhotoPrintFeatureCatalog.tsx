import React from 'react';
import styled from 'styled-components';
import { PhotoPrintFeatureCart } from '@project-nx/photo-print/feature-cart';

/* eslint-disable-next-line */
export interface PhotoPrintFeatureCatalogProps {}

const StyledPhotoPrintFeatureCatalog = styled.div`
  color: pink;
`;

export const PhotoPrintFeatureCatalog = (
  props: PhotoPrintFeatureCatalogProps
) => {
  return (
    <StyledPhotoPrintFeatureCatalog>
      <h1>Welcome to photo-print-feature-catalog component!</h1>
      <PhotoPrintFeatureCart></PhotoPrintFeatureCart>
    </StyledPhotoPrintFeatureCatalog>
  );
};

export default PhotoPrintFeatureCatalog;
