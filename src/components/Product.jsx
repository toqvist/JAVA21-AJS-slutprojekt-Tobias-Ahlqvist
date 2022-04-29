import React, {useRef} from 'react'

import Card from '@mui/material/Card'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Product({ product, addToCart }) {

    let quantity = useRef(1)

    return (
        <div>
            <Card variant="outlined">
                <img width="125px" src={product.img} />
                <h2>{product.name}</h2>
                <p>€{product.price}</p>
                <Select defaultValue={1}>
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
                    startIcon={<AddShoppingCartIcon />}>
                    Add to cart</Button>

            </Card>

        </div>
    )
}
