import React from 'react'
import NavBar from '../../Components/Organisms/NavBar'
//import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../../Components/Atoms/Main'
// import Footer from '../Components/Organisms/Footer'

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
