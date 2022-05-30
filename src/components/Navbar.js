import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {

    return (
        <AuthContext.Consumer>{(authContext) => {
            return (
                <ThemeContext.Consumer>{(themeContext) => {

                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;

                    return (
                        <nav style={{ background: theme.ui, color: theme.syntax }}>
                            <h1>CONTEXT APP</h1>
                            <button onClick={toggleAuth}>
                                {isAuthenticated ? 'LOGGED IN' : 'LOGGED OUT'}
                            </button>
                            <ul>
                                <li>HOME</li>
                                <li>ABOUT</li>
                                <li>CONTACT</li>
                            </ul>
                        </nav>
                    )
                }}</ThemeContext.Consumer>
            )
        }}</AuthContext.Consumer>
    )
}

export default Navbar