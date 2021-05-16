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
import AdminProductDetails from "./Admin/AdminProductDetails"
import AdminCategoryDetails from "./Admin/AdminCategoryDetails"
import AdminProductAdd from "./Admin/AdminProductAdd"
import AdminCategoryAdd from './Admin/AdminCategoryAdd'
import AdminCategoryEdit from './Admin/AdminCategoryEdit'
import AdminProductEdit from './Admin/AdminProductEdit'


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
          <Route exact path='/admin/category' render={() => <AdminCategoryAdd />} />
          <Route exact path='/admin/categories-edit/:categoryId'
            render={({ match }) => <AdminCategoryEdit categoryId={match.params.categoryId} />}
          />
          <Route exact path='/admin/product' render={() => <AdminProductAdd />} />

          <Route exact path='/admin/products-edit/:productId'
            render={({ match }) => <AdminProductEdit productId={match.params.productId} />}
          />
          <Route exact path='/admin/products/:productId'
            render={({ match }) => <AdminProductDetails productId={match.params.productId} />}
          />
          <Route exact path='/admin/categories/:categoryId'
            render={({ match }) => <AdminCategoryDetails categoryId={match.params.categoryId} />}
          />



        </AdminSection>
      </Main>

      <Footer />
    </div>
  )
}

export default Admin
