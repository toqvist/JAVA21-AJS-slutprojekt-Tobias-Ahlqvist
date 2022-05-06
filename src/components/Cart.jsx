
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../contexts/CartContext';
import UserContext from '../contexts/UserContext';
import CartItem from './CartItem';

import Grid from '@mui/material/Grid';



export default function Cart() {

  const { cart, totalPrice } = useContext(CartContext);
  const { user } = useContext(UserContext);


  return (
    <>
      {user && <h2>
        {user.username}'s Cart
      </h2>}

      {cart.length ?
        <Grid>
          {cart.map(product =>
            <Grid key={product.id}>
              <CartItem product={product} />
            </Grid>
          )}
        </Grid>
        : <>
          <p>Cart is empty!</p>
          <Link to="/">Go to shop</Link>
        </>
      }
      <h3>
        Total: €{totalPrice}
      </h3>

    </>

  )
}
