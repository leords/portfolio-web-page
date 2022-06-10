import { Children, createContext, useState } from "react";
import { Value } from "sass";

interface Theme {
    theme : string | null
    setTheme:  (newState: string) => void
}

export const ThemeContext = createContext<Theme>({} as Theme);

export const ThemeProvider = ({children}: {children: JSX.Element}) => {
    const [theme, setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}