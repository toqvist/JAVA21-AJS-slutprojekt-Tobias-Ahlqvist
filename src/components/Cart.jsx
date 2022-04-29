import React, { useContext } from 'react'
import CartContext from '../contexts/CartContext';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';


export default function Cart() {

  const {cart, setQuantity, removeFromCart} = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map(product =>
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>€{product.price}</p>
        </div>
      )
      }

    </div>
  )
}
