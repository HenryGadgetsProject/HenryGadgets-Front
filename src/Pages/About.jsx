import React from 'react'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'

const About = () => {
    console.log('Saca esta huevada')
    return (
        <div className="container">
            <NavBar id="nav-general" />
            <Breadcrumb id="breadcrumb" />
            {/* <Header id="header">
                <h1>Henry Gadgets</h1>
            </Header> */}

            <Main id="main">
                <h3>Acerca de nosotros.</h3>
            </Main>
            
            <Footer />
        </div>
    )
}

export default About
