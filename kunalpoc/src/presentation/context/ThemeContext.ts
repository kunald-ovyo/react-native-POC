import {createContext} from 'react';

export interface ThemeAndText {
  primaryColor: string;
  secondaryColor: string;
  backGroundColor: string;
  headingText: {};
}

export const themeContext = createContext<Partial<ThemeAndText> | undefined>(
  undefined,
);

export const ThemeProvider = themeContext.Provider;
