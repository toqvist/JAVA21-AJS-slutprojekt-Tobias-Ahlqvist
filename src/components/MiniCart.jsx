import React, { useContext, useState } from 'react'
import CartContext from '../contexts/CartContext';

import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from '@mui/material/Modal';

import CartItem from './CartItem';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card'

//Displays all products in cart in a modal, button indicates total amount of products
//Handles modal state for displaying cart
export default function MiniCart() {

    const { cart, cartItems, totalPrice } = useContext(CartContext);
    const [modal, setModal] = useState(false);

    return (
        <>
            <Button variant="outlined"
                onClick={() => setModal(true)}
                startIcon={<ShoppingCartIcon />}>
                {cartItems}
            </Button>

            {modal &&

                <Modal
                    open={modal}
                    onClose={() => setModal(false)}>
                    <Card>

                        <Box sx={{ margin: '1rem 4rem', display: 'flex', justifyContent: 'flex-end', gap: '10%' }}>
                            <p>Total: €{totalPrice}</p>
                            <IconButton onClick={() => setModal(false)} >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Box>
                            {cart.map(product =>
                                <CartItem
                                    key={product.id}
                                    product={product}
                                />
                            )}
                        </Box>

                    </Card>

                </Modal>
            }
        </>
    )
}
