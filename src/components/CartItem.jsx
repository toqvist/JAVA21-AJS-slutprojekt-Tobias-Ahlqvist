import React from 'react'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Card from '@mui/material/Card';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function CartItem({ product, removeFromCart, addToCart }) {
    return (
        <Card variant="outlined">
            <img src={product.img} width="80px" />
            Quantity:            
            
            <IconButton onClick={() => removeFromCart(product,1)}>
                <RemoveIcon></RemoveIcon>
            </IconButton>

            {product.quantity}

            <IconButton onClick={() => addToCart(product,1)}>
                <AddIcon></AddIcon>
            </IconButton>
            
            
        </Card>
    )
}
