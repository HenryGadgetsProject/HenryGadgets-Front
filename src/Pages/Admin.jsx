import React from "react"
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Main from "../Components/Atoms/Main"
import AdminSidebar from '../Components/Organisms/AdminSideBar/AdminSideBar'
import Container from "../Components/Atoms/Container"
import Footer from "../Components/Organisms/Footer"

const Admin = () => {


  return (
    <div className="container">
      <NavBar className="nav" />
      <Breadcrumb id="breadcrumb" />
      {/* <Header id="header">
        <h1>Henry Gadgets</h1>
      </Header> */}

      <Main id="main">
        <AdminSidebar />
        <Container />
      </Main>

      <Footer />
    </div>
  )
}

export default Admin
