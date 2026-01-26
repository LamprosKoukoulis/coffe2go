import React, {createContext, useState, useContext} from 'react';

const ViewContext = createContext(null);

export const ViewProvider = ({children}) =>{
    // "guest" | "user" | "driver"
    const [role,setRole] =useState("guest");
    const [view, setView]=useState("welcomePage");
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [stop,setStop]= useState(null);
    const [cart,setCart] =useState([]);

    const addToCart=(orderItem) =>{
        setCart((prevCart) => [...prevCart, orderItem]);
        console.table(orderItem)
    };

    return(
        <ViewContext.Provider value={{ view, setView, role, setRole,isLogedIn,setIsLogedIn,stop,setStop,cart,setCart,addToCart}}>
            {children}
        </ViewContext.Provider>
    )
};

export const useView =() => useContext(ViewContext);
