import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import MiniCart from './MiniCart'
import Login from './Login'
import UserContext from '../contexts/UserContext'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function Nav() {

  const { user } = useContext(UserContext)

  return (

    <AppBar position="fixed" className="nav" sx={{backgroundColor: 'white' }}>

      <Toolbar>
        <Link to='/'>
          Shop
        </Link>

        <Link to='/cart'>
          Cart
        </Link>

        {user.loggedIn ?
          <>
            <MiniCart />
          </>
          :
          <Login />
        }
      </Toolbar>
    </AppBar>
  )
}
