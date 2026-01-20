import React, {createContext, useState, useContext} from 'react';

const ViewContext = createContext(null);

export const ViewProvider = ({children}) =>{
    // "guest" | "user" | "driver"
    const [role,setRole] =useState("guest");
    const [view, setView]=useState("welcomePage");
    const [isLogedIn, setIsLogedIn] = useState(false);
    return(
        <ViewContext.Provider value={{ view, setView, role, setRole,isLogedIn,setIsLogedIn}}>
            {children}
        </ViewContext.Provider>
    )
};

export const useView =() => useContext(ViewContext);
