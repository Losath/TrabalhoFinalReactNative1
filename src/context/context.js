import { createContext, useState, useContext } from "react";
import { login } from "../service/auth";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    // const [usuario, setUser] = useState(null);
    const user="Aluno"
    const password= "123"

    // const signIn = async () => {
    //     console.log("login");
    //     const { user } = await login(); 
    //     setUser(user);
    // };

    return (
        <AuthContext.Provider value={{ user, password }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;