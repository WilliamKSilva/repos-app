import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { UserContextProvider } from './src/context/User';
import Navigation from './src/navigation';
import { defaultTheme } from './src/styles/themes/default';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserContextProvider>
        <Navigation />
      </UserContextProvider>
    </ThemeProvider>
  );
}