import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'


export default function Logout() {

    const { logout } = useContext(UserContext)
    let navigate = useNavigate()

    return (
        <>
            <Button
                onClick={() => {
                    logout();
                    navigate('/')
                }}
            variant="outlined">
            Logout
        </Button>
    </>
    )
}
