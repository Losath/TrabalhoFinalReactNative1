import { createContext, useState, useContext } from "react";


export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  
    const user="Aluno"
    const password= "123"

    

    return (
        <AuthContext.Provider value={{ user, password }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;