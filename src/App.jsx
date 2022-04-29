import { useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Nav from './components/Nav'
import { ProductsProvider } from './contexts/ProductsContext';

function App() {

  return (
    <div className="App">

      {/* The router conditionally renders components based on the the route (URL)*/}
      <ProductsProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ProductsProvider>
    </div >
  )
}

export default App
