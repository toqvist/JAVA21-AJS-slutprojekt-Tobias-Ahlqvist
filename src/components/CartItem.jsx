import React, { useContext } from 'react'

import CartContext from '../contexts/CartContext'
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function CartItem({ product }) {

    const { removeFromCart, addToCart } = useContext(CartContext)

    return (
        <Card variant="outlined" sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', pl: '5%', gap: '3%' }} >

            <img src={product.img} width="80px" />

            <span>Quantity: </span>

            <IconButton onClick={() => removeFromCart(product, 1)}>
                <RemoveIcon></RemoveIcon>
            </IconButton>
            {product.quantity}
            <IconButton onClick={() => addToCart(product, 1)}>
                <AddIcon></AddIcon>
            </IconButton>



        </Card>
    )
}
