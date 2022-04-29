import React from 'react'
import Product from './Product'

import Grid from '@mui/material/Grid'

export default function Shop() {

  const products = [{ id: 1000, name: "Cap", price: 10 }, { id: 1002, name: "Sneakers", price: 75 }, { id: 1003, name: "Shirt", price: 13 }]

  return (
    <div>
      <h1>Shop</h1>
      <Grid container spacing={2}>
        {products.map(product =>
          <Grid item key={product.id}>
            <Product product={product} />
          </Grid>
        )}
      </Grid>
    </div>
  )
}
