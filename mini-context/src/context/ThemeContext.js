import { createContext ,useContext } from "react";

export const ThemeContext = createContext({
    theme : '' ,
    toggleTheme: () => {}
})

export const ThemeContextProvider = ThemeContext.Provider

export function useTheme(){
    return useContext(ThemeContext)
}