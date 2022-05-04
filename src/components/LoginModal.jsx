import React from 'react'
import { useState, useContext, useRef } from 'react'

import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import UserContext from '../contexts/UserContext'


//The content to be displayed in the Login modal.
// Modal state is handled in the Nav (or other parent component)
export default function LoginModal() {
    const { login } = useContext(UserContext)

    let username = useRef()

    return (
        <Card>
            <h1>Log In</h1>
            <TextField
                variant="outlined"
                label="Username"
                onChange={(e) => username.current = e.target.value}
            />
            <Button
                onClick={() => login(username.current)}
                variant="contained">Login</Button>


        </Card>
    )
    }