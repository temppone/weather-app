import { DefaultTheme } from 'styled-components';

export const mainTheme: DefaultTheme = {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.6rem',
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

    weight: {
      xxsmall: 200,
      xsmall: 300,
      small: 400,
      medium: 500,
      large: 600,
      xlarge: 700,
      xxlarge: 800,
    },
    sizes: {
      xxxsmall: '1rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2.2rem',
      large: '2.6rem',
      xlarge: '3.4rem',
      xxlarge: '5.2rem',
    },
  },
  colors: {
    main: '#2C2C2C',
    mainBg: '#FDFCFC',
    boxBg: '#FAFAFA',
    text: '#9A9A9A',
    secondaryText: '#C4C4C4',

    white: '#FFFFFF',
    black: '#000000',
    gray: '#464545',

    light: '#fffffe',
    dark: '#000000',

    lightHover: '#f3f3f3',

    primary: '#375A7E',
    default: '#464545',
    danger: '#e74c3c',
    success: '#00bc8c',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '6.0rem',
    xlarge: '6.4rem',
    xxlarge: '12.8rem',
  },
  transition: {
    default: '0.2s ease-in-out',
  },
} as const;
