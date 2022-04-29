import React from 'react'
import { createContext } from 'react'

import cap from '../assets/img/cap.svg'
import sneakers from '../assets/img/sneakers.svg'
import tshirt from '../assets/img/tshirt.svg'
import jacket from '../assets/img/jacket.svg'
import jeans from '../assets/img/jeans.svg'
import scarf from '../assets/img/scarf.svg'
import hoodie from '../assets/img/hoodie.svg'
import martialGloves from '../assets/img/martialGloves.svg'
import socks from '../assets/img/socks.svg'


const ProductsContext = createContext()

export function ProductsProvider({ children }) {

    const products = [{ id: 1000, name: "Cap", price: 10, img: cap },
    { id: 1002, name: "Sneakers", price: 75, img: sneakers },
    { id: 1003, name: "Shirt", price: 18, img: tshirt },
    { id: 1004, name: "Jacket", price: 120, img: jacket },
    { id: 1005, name: "Jeans", price: 55, img: jeans },
    { id: 1006, name: "Scarf", price: 8, img: scarf },
    { id: 1007, name: "Hoodie", price: 38, img: hoodie },
    { id: 1008, name: "Martial Gloves", price: 35, img: martialGloves },
    { id: 1009, name: "Socks", price: 5, img: socks }]

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;