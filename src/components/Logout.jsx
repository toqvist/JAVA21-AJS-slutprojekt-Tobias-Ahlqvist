import React, {useContext} from 'react'
import UserContext from '../contexts/UserContext'
import Button from '@mui/material/Button'

export default function Logout() {

    const { logout } = useContext(UserContext)
    return (
        <Button
            onClick={() => logout()}
            variant="outlined">
            Logout
        </Button>
    )
}
