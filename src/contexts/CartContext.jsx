import React, { createContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const addToCart = (product, newQuantity) => {
        
        //Check if product with same id already exists
        const productIndex = cart.findIndex(item => item.id === product.id)

        //If product already exists, update its quantity
        if(productIndex >= 0) {
            const newCart = [...cart]
            newCart[productIndex].quantity += newQuantity 
            setCart(newCart)
            return
        }

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
