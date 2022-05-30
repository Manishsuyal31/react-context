import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [isAuthenticated, setisAuthenticated] = useState(false);
    const toggleAuth = () => {
        if (isAuthenticated === true) {
            setisAuthenticated(false)
        }
        else {
            setisAuthenticated(true)
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider