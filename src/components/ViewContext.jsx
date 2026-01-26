import React, {createContext, useState, useContext} from 'react';

const ViewContext = createContext(null);

export const ViewProvider = ({children}) =>{
    // "guest" | "user" | "driver"
    const [role,setRole] =useState("guest");
    const [view, setView]=useState("welcomePage");
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [stop,setStop]= useState(null);
    const [shop,setShop]= useState(null);
    const [orderLocation,setOrderLocation] =useState(null);
    const [cart,setCart] =useState([]);
    const [route, setRoute] =useState(null);

    const addToCart=(orderItem) =>{
        setCart((prevCart) => [...prevCart, orderItem]);
        console.table(orderItem)
    };

    const resetAll=() =>{
        setRole("guest");
        setView("welcomePage");
        setIsLogedIn(false);
        setStop(null);
        setCart([]);
        setRoute(null);
    };

    return(
        <ViewContext.Provider 
        value={{view, setView,
                role, setRole,
                isLogedIn,setIsLogedIn,
                stop,setStop,
                cart,setCart,addToCart,
                route, setRoute,
                shop,setShop,
                orderLocation,setOrderLocation,
                resetAll
                }}>
            {children}
        </ViewContext.Provider>
    )
};

export const useView =() => useContext(ViewContext);
