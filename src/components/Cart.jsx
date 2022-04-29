
import React, { useContext } from 'react'
import CartContext from '../contexts/CartContext';
import CartItem from './CartItem';

import Grid from '@mui/material/Grid';



export default function Cart() {

  const { cart, setQuantity, removeFromCart } = useContext(CartContext);

  return (
    <>
      <Grid>
        {cart.map(product =>
          <Grid key={product.id}>
            <CartItem product={product} setQuantity={setQuantity} removeFromCart={removeFromCart} />
          </Grid>
        )}
      </Grid>
    </>

  )
}
