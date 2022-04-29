import { useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Nav from './components/Nav'
import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext'

function App() {

  return (
    <div className="App">

      {/* The router conditionally renders components based on the the route (URL)*/}
      <ProductsProvider>
        <CartProvider>
          <Router>
            <Nav />
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Router>
        </CartProvider>
      </ProductsProvider>
    </div >
  )
}

export default App
