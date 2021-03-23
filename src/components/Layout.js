import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from '../assets/theme';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
