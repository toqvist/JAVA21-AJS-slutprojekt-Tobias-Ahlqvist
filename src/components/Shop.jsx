import React, { useContext } from 'react'
import Product from './Product'
import ProductsContext from '../contexts/ProductsContext'
import CartContext from '../contexts/CartContext'
import UserContext from '../contexts/UserContext'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export default function Shop() {

  const products = useContext(ProductsContext)
  const { addToCart } = useContext(CartContext)
  const { user } = useContext(UserContext)


  return (
    
    // Iterate over each product in the provided products list. Return a Product component for each product
    <Box paddingY={3} paddingX={3} sx={{ maxWidth: 1000, display: 'flex', margin: 'auto' }} >
      <Grid container spacing={2} >
        {products.map(product =>
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Product product={product} addToCart={addToCart} user={user} />
          </Grid>
        )}
      </Grid>
    </Box>

  )
}
