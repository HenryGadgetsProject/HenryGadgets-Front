import React from 'react'
import NavBar from '../../Components/Organisms/NavBar'
//import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../../Components/Atoms/Main'
// import Footer from '../Components/Organisms/Footer'
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
