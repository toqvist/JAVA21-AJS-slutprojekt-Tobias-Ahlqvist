import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useState, useContext } from 'react'
import MiniCart from './MiniCart'
import Login from './Login'
import Logout from './Logout'
import UserContext from '../contexts/UserContext'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Link from '@mui/material/Link'

export default function Nav() {

  const { user } = useContext(UserContext)

  return (

    <AppBar position="fixed"
      sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }} >


        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, fontWeight: 'bold', display: { xs: 'none', md: 'block' } }}
          >
          WebShop
        </Typography>

        <RouterLink to='/'>
          Shop
        </RouterLink>



        {user ?
          <>
            <RouterLink to='/cart'>
              Cart
            </RouterLink>

            <MiniCart />

            <Logout />
          </>
          :
            <Login />
        }

      </Toolbar>
    </AppBar>
  )
}
