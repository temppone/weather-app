import { screen } from '@testing-library/react';
import React from 'react';
import Input from '.';
import { renderWithTheme } from './../../../utils/jestThemeHelper';

describe('<Input />', () => {
  it('should render the input', () => {
    renderWithTheme(<Input placeholder="teste" />);
    expect(screen.findByPlaceholderText(/teste/i));
  });
});
