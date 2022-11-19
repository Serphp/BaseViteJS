import { createContext, useContext, useState } from "react";

export const usercontext = createContext();

const ConProvider = ({ children }) => {
    return(
        <usercontext.Provider>
            {children}
        </usercontext.Provider>
    )
}

export default ConProvider;

export const uuContext = () => useContext(usercontext);