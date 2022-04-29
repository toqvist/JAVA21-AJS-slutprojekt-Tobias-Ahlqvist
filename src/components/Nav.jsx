import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import MiniCart from './MiniCart'

export default function Nav() {

  return (
    <nav>
      <Link to='/'>
        Shop
      </Link>
      <Link to='/cart'>
        Cart
      </Link>
      <MiniCart />
    </nav >
  )
}
