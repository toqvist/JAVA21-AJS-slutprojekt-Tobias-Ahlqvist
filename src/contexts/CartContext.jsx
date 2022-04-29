import React, { createContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const addToCart = (product, newQuantity) => {

        //Check if product with same id already exists
        const productIndex = cart.findIndex(item => item.id === product.id)

        //If product already exists, update its quantity
        if (productIndex >= 0) {
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

    const removeFromCart = (product, newQuantity) => {

        //Find the product's index
        const productIndex = cart.findIndex(item => item.id === product.id)

        //If product doesn't exist, return
        if (productIndex < 0) {
            return
        }

        //If quantity to remove is greater than current quantity, remove product from cart
        if (cart[productIndex].quantity - newQuantity <= 0) {
            //Create a new cart by filtering out the product to be removed
            const newCart = cart.filter(prod => prod.id !== product.id)
            setCart(newCart)
            return
        }
        
        //IOtherwise, subtract the entered quantity
        const newCart = [...cart]
        newCart[productIndex].quantity -= newQuantity
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
