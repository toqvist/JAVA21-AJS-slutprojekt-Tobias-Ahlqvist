import React, { useContext } from 'react'
import Product from './Product'
import ProductsContext from '../contexts/ProductsContext'
import CartContext from '../contexts/CartContext'

import Grid from '@mui/material/Grid'

export default function Shop() {

  const products = useContext(ProductsContext);

  const {addToCart} = useContext(CartContext)


  return (
    <div>
      <h1>Shop</h1>
      <Grid container spacing={2}>
        {products.map(product =>
          <Grid item key={product.id}>
            <Product product={product} addToCart={addToCart} />
          </Grid>
        )}
      </Grid>
      {/* <button onClick={() => addToCart()}>butt</button> */}
    </div>
  )
}
