import { createContext, useState } from "react";

const counterContext=createContext({})


export function CounterProvider({children}){
    const [count,setCount]=useState(0)
    const [cart,setCart]=useState({})
    const [showCart,setShowCart]=useState(false)

    const increaseCount=(product)=>{
        setCount(count+1)
        const newCart={
            ...cart,[product]:cart[product]?cart[product]+1:1
        }
        setCart(newCart)
    }
    const decreaseCount=(product)=>{
        if(cart[product]){
            if( cart[product]===1){
                const newCart={...cart}
                delete newCart[product]
                setCart(newCart)
            }else{
                const newCart={
                    ...cart,[product]:cart[product]-1
                }
                
                setCart(newCart)
            }
            setCount(count-1)

        }
    }
    return(
        <counterContext.Provider value={{count,increaseCount,decreaseCount,cart,setShowCart,showCart}}>
            {children}
        </counterContext.Provider>
    )
}


export default counterContext