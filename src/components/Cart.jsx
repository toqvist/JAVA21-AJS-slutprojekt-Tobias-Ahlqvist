
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../contexts/CartContext';
import CartItem from './CartItem';

import Grid from '@mui/material/Grid';



export default function Cart() {

  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <>
      {cart.length ?
        <Grid>
          {cart.map(product =>
            <Grid key={product.id}>
              <CartItem product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
            </Grid>
          )}
        </Grid>
        : <>
          <p>Cart is empty!</p>
          <Link to="/">Go to shop</Link>
        </>
      }


    </>

  )
}
