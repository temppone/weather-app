import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    grid: {
      container: string;
      gutter: string;
    };
    border: {
      radius: string;
    };
    font: {
      family: string;
      weight: {
        xxsmall: number;
        xsmall: number;
        small: number;
        medium: number;
        large: number;
        xlarge: number;
        xxlarge: number;
      };
      sizes: {
        xxxsmall: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
      };
    };
    colors: {
      main: string;
      mainBg: string;
      boxBg: string;
      text: string;
      secondaryText: string;

      white: string;
      black: string;
      gray: string;

      light: string;
      dark: string;

      lightHover: string;

      primary: string;
      default: string;
      danger: string;
      success: string;
    };
    spacings: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    transition: {
      default: string;
    };
  }
}
