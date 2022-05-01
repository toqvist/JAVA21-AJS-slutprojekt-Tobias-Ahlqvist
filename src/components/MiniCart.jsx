import React, { useContext, useState } from 'react'
import CartContext from '../contexts/CartContext';

import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from '@mui/material/Modal';

import CartModal from './CartModal';
import CartItem from './CartItem';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card'

export default function MiniCart() {

    const { cart, cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const [modal, setModal] = useState(false);

    return (
        <>
            <Button variant="outlined"
                onClick={() => setModal(true)}
                startIcon={<ShoppingCartIcon></ShoppingCartIcon>}>
                {cartItems}
            </Button>

            {modal &&

                <Modal
                    open={modal}
                    onClose={() => setModal(false)}>
                    <Card>

                        <Box>
                            <IconButton onClick={() => setModal(false)}>
                                <CloseIcon></CloseIcon>
                            </IconButton>
                        </Box>
                        <Box>
                            {cart.map(product =>
                                <CartItem
                                    key={product.id}
                                    product={product}
                                    addToCart={addToCart}
                                    removeFromCart={removeFromCart} />
                            )}
                        </Box>
                    </Card>

                </Modal>
            }
        </>
    )
}
