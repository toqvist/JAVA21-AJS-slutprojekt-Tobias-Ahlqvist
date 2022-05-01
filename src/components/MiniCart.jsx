import React, { useContext } from 'react'
import CartContext from '../contexts/CartContext'

import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function MiniCart() {

    const { cartItems } = useContext(CartContext);

    return (
        <Button variant="outlined" 
            startIcon={<ShoppingCartIcon></ShoppingCartIcon>}>
            {cartItems}
        </Button>
    )
}
