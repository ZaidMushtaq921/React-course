import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light", // default theme mode is light. If user has chosen a different one, it will be reflected here
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme (){
    return useContext(ThemeContext);
}