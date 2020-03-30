import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedFeatureAuthProps {}

const StyledSharedFeatureAuth = styled.div`
  color: pink;
`;

export const SharedFeatureAuth = (props: SharedFeatureAuthProps) => {
  return (
    <StyledSharedFeatureAuth>
      <h1>Welcome to shared-feature-auth component!</h1>
    </StyledSharedFeatureAuth>
  );
};

export default SharedFeatureAuth;
