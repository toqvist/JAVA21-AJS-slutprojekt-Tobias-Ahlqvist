import React from 'react'
import { useState, useContext, useRef } from 'react'

import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'

import UserContext from '../contexts/UserContext'

export default function Login() {


    const { login } = useContext(UserContext)

    let username = useRef()

    const [modal, setModal] = useState(false)

    return (
        <>
            <Button
                onClick={() => setModal(!modal)}
                variant="contained">
                Login
            </Button>

            {modal && <>
                <Modal
                    open={modal}
                    onClose={() => setModal(false)}>
                    <Card>
                        <h1>Login</h1>
                        <TextField
                            variant="outlined"
                            label="Username"
                            onChange={(e) => username.current = e.target.value}
                            onKeyDown={ (e) => e.key === 'Enter' && login(username.current) }
                        />
                        <div>
                            <Button
                                onClick={() => login(username.current)}
                                variant="contained">Login</Button>
                        </div>
                    </Card>
                </Modal>
            </>}
        </>
    )
}
