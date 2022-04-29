import React from 'react'
import { useState, useContext, useRef } from 'react'

import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import UserContext from '../contexts/UserContext'

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