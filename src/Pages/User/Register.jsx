import React from 'react'
import NavBar from '../../Components/Organisms/NavBar'
import Main from '../../Components/Atoms/Main'
import RegisterForm from '../../Components/Organisms/RegisterForm'

const Register = () => {
    return (
        <div className="container">
            <NavBar className="nav" />
            <Main id="main">
                <RegisterForm/>
            </Main>
        </div>
    )
}

export default Register