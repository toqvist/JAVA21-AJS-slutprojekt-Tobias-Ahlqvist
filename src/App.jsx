import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Nav from './components/Nav'
import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext'
import { UserProvider } from './contexts/UserContext'
import WebShopStorage from './components/WebShopStorage'

import Box from '@mui/material/Box'
import CartContext from './contexts/CartContext'
import UserContext from './contexts/UserContext'


function App() {

 
  return (
    <div className="App">

      {/* The router conditionally renders components based on the the route (URL)*/}
      <ProductsProvider>
        <CartProvider>
          <UserProvider>
            <WebShopStorage/>

            <Router basename="/JAVA21-AJS-slutprojekt-Tobias-Ahlqvist/">
              
              <Nav />

              <Box marginTop={8}>
                <Routes>
                  <Route path='/' element={<Shop />} />
                  <Route path='/cart' element={<Cart />} />
                </Routes>
              </Box>
            
            </Router>


          </UserProvider>
        </CartProvider>
      </ProductsProvider>
    </div >
  )
}

export default App
