import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import MiniCart from './MiniCart'
import Login from './Login'
import UserContext from '../contexts/UserContext'

export default function Nav() {

  const { user } = useContext(UserContext)

  return (
    <nav>
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
    </nav >
  )
}
