import { render, RenderResult } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { mainTheme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

export const renderWithTheme = (children: ReactNode): RenderResult => {
  return render(<ThemeProvider theme={mainTheme}>{children}</ThemeProvider>);
};
