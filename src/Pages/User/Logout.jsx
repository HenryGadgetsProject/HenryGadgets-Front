import React from 'react'
import NavBar from '../../Components/Organisms/NavBar'
import Main from '../../Components/Atoms/Main'

const Logout = () => {
    return (
        <div className="container">
            <NavBar className="nav" />
            <Main id="main">
                <h3>Logout Page</h3>
            </Main>
        </div>
    )
}

export default Logout
