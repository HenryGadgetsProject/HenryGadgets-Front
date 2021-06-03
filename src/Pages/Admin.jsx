import React from "react"
import { Route } from 'react-router-dom'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Main from "../Components/Atoms/Main"

import AdminSidebar from '../Components/Organisms/AdminSideBar'
import AdminSection from '../Components/Atoms/AdminSection'

import AdminProducts from '../Pages/Admin/AdminProducts'
import AdminProductAdd from "./Admin/AdminProductAdd"
import AdminProductEdit from './Admin/AdminProductEdit'
import AdminProductDetails from "./Admin/AdminProductDetails"

import AdminCategories from '../Pages/Admin/AdminCategories'
import AdminCategoryAdd from './Admin/AdminCategoryAdd'
import AdminCategoryEdit from './Admin/AdminCategoryEdit'
import AdminCategoryDetails from "./Admin/AdminCategoryDetails"

import AdminUsers from './Admin/AdminUsers'
import AdminBranches from "./Admin/AdminBranches"
import AdminBranchAdd from "./Admin/AdminBranchAdd"
import AdminBranchEdit from './Admin/AdminBranchEdit'

import AdminOrders from "./Admin/AdminOrders"
import AdminOrderEdit from "./Admin/AdminOrderEdit"

import Footer from "../Components/Organisms/Footer"
import AdminOffers from "./Admin/AdminOffers"
//import NotFoundAdmin from "./NotFoundAdmin"

const Admin = () => {

    return (
        <div className="container">
            <NavBar id="nav-general" />
            <Breadcrumb id="breadcrumb" />

            <Main id="main">
                <AdminSidebar />

                <AdminSection>
                    <Route exact path={['/admin', '/admin/products']} render={() => <AdminProducts />} />
                    <Route exact path='/admin/categories' render={() => <AdminCategories />} />
                    <Route exact path='/admin/users' render={() => <AdminUsers />} />
                    <Route exact path='/admin/orders' render={() => <AdminOrders />} />
                    <Route exact path='/admin/branches' render={() => <AdminBranches />} />
                    <Route exact path='/admin/offers' render={() => <AdminOffers/>} />

                    <Route exact path='/admin/category' render={() => <AdminCategoryAdd />} />
                    <Route exact path='/admin/product' render={() => <AdminProductAdd />} />
                    <Route exact path='/admin/branch' render={() => <AdminBranchAdd />} />

                    <Route exact path='/admin/order-edit/:orderId'
                        render={({ match }) => <AdminOrderEdit orderId={match.params.orderId} />}
                    />
                    <Route exact path='/admin/categories-edit/:categoryId'
                        render={({ match }) => <AdminCategoryEdit categoryId={match.params.categoryId} />}
                    />
                    <Route exact path='/admin/products-edit/:productId'
                        render={({ match }) => <AdminProductEdit productId={match.params.productId} />}
                    />
                    <Route exact path='/admin/branches-edit/:branchId'
                        render={({ match }) => <AdminBranchEdit branchId={match.params.branchId} />}
                    />


                    <Route exact path='/admin/products/:productId'
                        render={({ match }) => <AdminProductDetails productId={match.params.productId} />}
                    />
                    <Route exact path='/admin/categories/:categoryId'
                        render={({ match }) => <AdminCategoryDetails categoryId={match.params.categoryId} />}
                    />
                    {/* <Route component={NotFoundAdmin} /> */}
                </AdminSection>
            </Main>

            <Footer />
        </div>
    )
}

export default Admin
