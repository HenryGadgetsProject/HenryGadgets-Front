import React from 'react'
import NavBar from '../../Components/Organisms/NavBar'
import { useSelector } from 'react-redux'
//import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../../Components/Atoms/Main'
// import Footer from '../../Components/Organisms/Footer'

const UserProfile = () => {

    const user = useSelector(state => state.user.user)

    return (
        <div className="container">
            <NavBar className="nav" />
            <Main id="main">
                <h3>{user.name}</h3>
            </Main>
        </div>
    )
}

export default UserProfile