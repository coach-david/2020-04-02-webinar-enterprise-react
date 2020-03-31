import React, { FC } from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core/dist';
import customTheme from './customTheme';

export const Theme: FC = ({ children }) => {
  return <ThemeProvider theme={customTheme}><CSSReset/>{children}</ThemeProvider>;
};
