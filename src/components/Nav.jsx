import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'

export default function Nav() {
  return (
    <nav>
      <Link to='/'>
        Shop
      </Link>
      <Link to='/cart'>
        Cart
      </Link>
    </nav >
  )
}
