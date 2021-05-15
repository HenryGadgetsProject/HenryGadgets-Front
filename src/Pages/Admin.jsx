import React from "react"
import { Route } from 'react-router-dom'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Main from "../Components/Atoms/Main"
import AdminSidebar from '../Components/Organisms/AdminSideBar'
import AdminSection from '../Components/Atoms/AdminSection'
import AdminCategories from '../Pages/Admin/AdminCategories'
import AdminProducts from '../Pages/Admin/AdminProducts'
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
        <AdminSection>
          <Route exact path={['/admin', '/admin/products']} render={() => <AdminProducts />} />
          <Route exact path='/admin/categories' render={() => <AdminCategories />} />
        </AdminSection>
      </Main>

      <Footer />
    </div>
  )
}

export default Admin
