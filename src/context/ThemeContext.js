import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [isLightTheme, setIsLightTheme] = useState(true);
    const state = {
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }
    const toggleTheme = () => {
        if (isLightTheme === true) {
            setIsLightTheme(false)
        }
        else {
            setIsLightTheme(true)
        }
    }
    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme, isLightTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider