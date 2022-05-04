import React, { createContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {

    //Array of the products in the cart
    const [cart, setCart] = useState([])
    //CartItems is the total amount of products in the cart
    const [cartItems, setCartItems] = useState(0)

    const addToCart = (product, newQuantity) => {

        //Check if product with same id already exists
        const productIndex = cart.findIndex(item => item.id === product.id)

        //If product already exists, update its quantity
        if (productIndex >= 0) {
            const newCart = [...cart]
            newCart[productIndex].quantity += newQuantity
            updateCart(newCart)
            return
        }

        let productToAdd = {
            ...product,
            quantity: newQuantity
        }
        updateCart([...cart, productToAdd])
    }

    const removeFromCart = (product, newQuantity) => {

        //Find the product's index
        const productIndex = cart.findIndex(item => item.id === product.id)

        //If product doesn't exist, return early
        if (productIndex < 0) {
            return
        }

        //If quantity to remove is greater than current quantity, remove product from cart entirely
        if (cart[productIndex].quantity - newQuantity <= 0) {
            //Create a new cart by filtering out the product to be removed
            const newCart = cart.filter(prod => prod.id !== product.id)
            updateCart(newCart)
            return
        }
        
        //Otherwise, subtract the provided quantity
        const newCart = [...cart]
        newCart[productIndex].quantity -= newQuantity
        updateCart(newCart)
    }

    //Helper function to be used instead of setCart.
    //Updates the cart with the provided cart, and the cartItems to reflect quantity of products in the cart.
    function updateCart(newCart) {
        let newCartItems = 0
        for (let i = 0; i < newCart.length; i++) {
            newCartItems += newCart[i].quantity
        }
        setCart(newCart)
        setCartItems(newCartItems)
    }

    return (
        <CartContext.Provider value={{ cart, cartItems, updateCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
