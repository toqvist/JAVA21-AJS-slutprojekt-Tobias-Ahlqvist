import React, { createContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const addToCart = (product, newQuantity) => {
        //Make a copy of the current cart with the spread operator, 
        //append the new product at the end 
        let productToAdd = {
            ...product,
            quantity: newQuantity
        }
        setCart([...cart, productToAdd])
    }

    const removeFromCart = (product, quantity) => {

    }

    const setQuantity = (product, quantity) => {
    
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, setQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
