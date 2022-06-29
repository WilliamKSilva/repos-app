import styled from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      secondary: string;
      white: string;
      gray: string;
      black: string;
      background: string;
    };
  }
}