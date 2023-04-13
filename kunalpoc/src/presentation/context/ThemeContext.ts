import {createContext} from 'react';

export interface ThemeAndText {
  primaryColor: string;
  secondaryColor: string;
  backGroundColor: string;
  headingText: {};
  baseContainerStyle: {};
}

export const themeContext = createContext<Partial<ThemeAndText>>({});

export const ThemeProvider = themeContext.Provider;
