import React from 'react'
import Card from '@mui/material/Card'

export default function Product({ product }) {
    return (
        <div>
            <Card variant="outlined">
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                
            </Card>

        </div>
    )
}
