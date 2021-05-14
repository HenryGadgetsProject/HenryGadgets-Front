import React from "react"
import Header from "../Components/Atoms/Header"
import Main from "../Components/Atoms/Main"
import AdminSidebar from '../Components/Organisms/AdminSideBar/AdminSideBar'
import Container from "../Components/Atoms/Container"

const Admin = () => {

  return (
    <div className="container">
      <Header id="header">{/* <h1>Henry Gadgets</h1> */}</Header>

      <Main id="main">
        <AdminSidebar />
        <Container />
      </Main>
    </div>
  )
}

export default Admin
