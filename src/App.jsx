import 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Nav from './components/Nav'
import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext'
import { UserProvider } from './contexts/UserContext'
import WebShopStorage from './components/WebShopStorage'

import Box from '@mui/material/Box'

// This project uses Material-UI to style components, MUI components are imported from @mui/material
// Custom styling for MUI components is done by adding a sx prop to the component

// MUI icons used for icons, these are imported from @mui/icons

// React router is used to route between components,  the routes are defined in the Routes component's children
// The 'Link' component, in the Nav component is used to link to other components, for the Router

// The cart state is stored in cart context, which the CartProvider then provides. 

// User login/logout state is handled in UserContext
// What user is currently logged in does not matter, the same cart is loaded as long as a user exists
// The cart and user is stored in local storage. This is done in the useEffect(), in the WebShopStorage component

// The products and their information are defined in the ProductsContext
// These are used by the Shop component to display the products with the Product component

// React spring is installed as a dependency, but is not currently used. 
// Spring will be used in the future to animate various components.

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
