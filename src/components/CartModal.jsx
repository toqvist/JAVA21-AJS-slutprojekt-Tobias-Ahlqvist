import React, { useContext } from 'react'
import CartContext from '../contexts/CartContext';
import CartItem from './CartItem';

import Card from '@mui/material/Card';
import Modal from '@mui/material/Modal';



export default function CartModal() {

    const { cart } = useContext(CartContext);


    return (

        <Card>
            
        </Card>
    )
}
