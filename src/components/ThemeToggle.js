import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {
    
    const context = useContext(ThemeContext);
    const { toggleTheme } = context;

    return (
        <button onClick={toggleTheme}>TOGGLE THE THEME</button>
    )
}

export default ThemeToggle