import React from 'react'
import NavBar from '../../Components/Organisms/NavBar'
//import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../../Components/Atoms/Main'
// import Footer from '../Components/Organisms/Footer'
import RegisterForm from '../../Components/Organisms/RegisterForm'

const Register = () => {
    return (
        <div className="container">
            <NavBar className="nav" />
            <Main id="main">
                <h2>Register.</h2>
                <RegisterForm/>
            </Main>
        </div>
    )
}

export default Register