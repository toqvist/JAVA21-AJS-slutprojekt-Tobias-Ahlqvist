
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../contexts/CartContext';
import UserContext from '../contexts/UserContext';
import CartItem from './CartItem';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export default function Cart() {

  const { cart, totalPrice, emptyCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  let navigate = useNavigate()

  //Empty the cart and navigate to index
  function completePurchase() {
    alert('Purchase completed!');
    navigate('/')
    emptyCart();
  }

  return (
    <>
      {user && <h2>
        {user.username}'s Cart
      </h2>}

      {cart.length ? <>
        <Grid>
          {cart.map(product =>
            <Grid key={product.id}>
              <CartItem product={product} />
            </Grid>
          )}

        </Grid>
        <h3>
          Total: €{totalPrice}
        </h3>
        <Button variant="contained"
          onClick={() => completePurchase()
          }>Complete purchase</Button>
      </>
        : <>
          <p>Cart is empty!</p>
          <Link to="/">Go to shop</Link>
        </>
      }

    </>

  )
}
