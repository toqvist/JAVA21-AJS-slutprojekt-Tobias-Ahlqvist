import React from 'react'
import { createContext} from 'react'

// import cap from '../assets/img/cap'
// import sneakers from '../assets/img/sneakers'
// import tshirt from '../assets/img/tshirt'

const ProductsContext = createContext()

export function ProductsProvider({ children }) {

    const products = [{ id: 1000, name: "Cap", price: 10 }, { id: 1002, name: "Sneakers", price: 75 }, { id: 1003, name: "Shirt", price: 13 }]

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;