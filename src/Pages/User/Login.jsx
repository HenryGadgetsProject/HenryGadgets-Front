import React from 'react'
import NavBar from '../../Components/Organisms/NavBar'
import Main from '../../Components/Atoms/Main'
import LoginForm from '../../Components/Organisms/LoginForm'

const Login = () => {
    return (
        <div className="container">
            <NavBar className="nav" />
            <Main id="main">
                <LoginForm/>
            </Main>
        </div>
    )
}

export default Login
