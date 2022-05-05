import React, { useState, createContext } from 'react'

const UserContext = createContext()

//Currently only keeps track of a single user, with the supplied username, as defined in the login function
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



