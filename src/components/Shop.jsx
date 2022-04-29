import React, { useContext } from 'react'
import Product from './Product'
import ProductsContext from '../contexts/ProductsContext'

import Grid from '@mui/material/Grid'

export default function Shop() {

  const products = useContext(ProductsContext);

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
