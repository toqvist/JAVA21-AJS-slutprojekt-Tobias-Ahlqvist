import React, { useState, createContext } from 'react'

const UserContext = createContext()

export function UserProvider ({ children }) {

    const [user, setUser] = useState()

    const login = (usrname) => {
        setUser({
            loggedIn: true,
            username: usrname
        })
    }
    
    const logout = () => {
        setUser(null)
    }


    return (
        <UserContext.Provider value={ {user, login, logout, setUser} }>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext



