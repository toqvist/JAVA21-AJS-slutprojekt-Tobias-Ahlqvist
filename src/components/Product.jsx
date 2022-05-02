import React, { useRef } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'


export default function Product({ product, addToCart, user }) {

    let quantity = useRef(1)

    return (
        <Card variant="outlined">
            <Box sx={{ maxWidth: 340, display: 'flex', justifyContent: 'center', mt: '10%', ml: '10%' }}>
                <CardMedia
                    style={{ height: 125, width: 125 }}
                    component="img"
                    image={product.img} />
            </Box>



            <Typography variant="h5" component="h2" sx={{ maxWidth: 340, display: 'flex', justifyContent: 'center', mt: '10%' }}>
                {product.name} - €{product.price}
            </Typography>
            
            {user ?
                <CardActions>
                    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Select defaultValue={1} sx={{ maxHeight: '2.5rem' }}
                        onChange={ (e) => quantity.current = e.target.value }>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                        </Select>
                        <Button onClick={() => addToCart(product, quantity.current)}
                            variant="contained"
                            startIcon={<AddShoppingCartIcon />}

                        >
                            Add to cart</Button>
                    </Container>
                </CardActions>
                :
                <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                    Please Log in to add to cart!
                </CardActions>
            }

        </Card>
    )
}
