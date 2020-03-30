import React from 'react';
import { SharedFeatureAuth } from '@project-nx/shared/feature-auth';
import { PhotoPrintFeatureCatalog } from '@project-nx/photo-print/feature-catalog';
import { PhotoPrintFeatureCheckout } from '@project-nx/photo-print/feature-checkout';

/* eslint-disable-next-line */
export interface PhotoPrintShellProps {}

export const PhotoPrintShell = (props: PhotoPrintShellProps) => {
  return (
    <>
      <SharedFeatureAuth></SharedFeatureAuth>
      <PhotoPrintFeatureCatalog></PhotoPrintFeatureCatalog>
      <PhotoPrintFeatureCheckout></PhotoPrintFeatureCheckout>
    </>
  );
};

export default PhotoPrintShell;
