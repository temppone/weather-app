import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithTheme } from './../../../utils/jestThemeHelper';
import AutoComplete from './index';

const options = [
  {
    name: 'Option 1',
  },
  {
    name: 'Option 2',
  },
  {
    name: 'Option 3',
  },
];

describe('<Input />', () => {
  it('should render the input', () => {
    renderWithTheme(
      <AutoComplete placeholder="teste" optionsArray={options} />
    );
    expect(screen.findByPlaceholderText(/teste/i));
  });
});
