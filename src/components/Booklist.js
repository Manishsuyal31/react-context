import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Booklist = () => {

    const context = useContext(ThemeContext);
    const { isLightTheme, light, dark } = context;
    const theme = isLightTheme ? light : dark;

    return (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                <li style={{ background: theme.ui }}>The way of kings</li>
                <li style={{ background: theme.ui }}>The name of the wind</li>
                <li style={{ background: theme.ui }}>The final empire</li>
            </ul>
        </div>
    )
}

export default Booklist