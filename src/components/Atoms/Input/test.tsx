import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '.';

describe('<Input />', () => {
  it('should render the input', () => {
    render(<Input />);
    expect(screen.findByPlaceholderText('Cidade')).toBeInTheDocument();
  });
});
