import React, {useEffect, useContext} from 'react'

import CartContext from '../contexts/CartContext';
import UserContext from '../contexts/UserContext';

export default function WebShopStorage() {

    const { cart, updateCart } = useContext(CartContext)
    const { user, setUser } = useContext(UserContext)

    const LOCAL_STORAGE_KEY_CART = 'WebShop.cart';
    const LOCAL_STORAGE_KEY_USER = 'WebShop.user';

    //When this components mounts (when the page loads), 
    //load the cart and user from local storage if a user has previously been stored
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CART));
        const storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER));
        
        if (storedUser) {
            setUser(storedUser)
            updateCart(storedCart);
            
        }
    }, [])

    //When user or cart changes, save them to local storage
    useEffect(() => {
        if (user) {
            localStorage.setItem(LOCAL_STORAGE_KEY_USER, JSON.stringify(user))
            localStorage.setItem(LOCAL_STORAGE_KEY_CART, JSON.stringify(cart))
        } else {
            localStorage.clear();
        }
    }, [user, cart])

    return (
        <></>
    )
}
