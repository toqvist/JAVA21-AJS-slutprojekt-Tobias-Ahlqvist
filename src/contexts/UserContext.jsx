import React, { useState, createContext } from 'react'

const UserContext = createContext()

export function UserProvider ({ children }) {

    const [user, setUser] = useState({loggedIn: false})

    const login = (usrname) => {
        setUser({
            loggedIn: true,
            username: usrname
        })
    }
    

    return (
        <UserContext.Provider value={ {user, login} }>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext



