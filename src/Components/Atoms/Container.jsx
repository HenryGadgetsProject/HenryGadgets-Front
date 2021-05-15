import React from 'react'
import styled from "styled-components"
import { Route } from 'react-router-dom'
import AdminProducts from '../../Pages/Admin/AdminProducts'
import AdminCategories from '../../Pages/Admin/AdminCategories'
import AdminProductDetails from '../../Pages/Admin/AdminProductDetails'
import AdminCategoryDetails from '../../Pages/Admin/AdminCategoryDetails'

const Container = styled.div`
  align-self: right;
  background: #424242;  
  padding: .3em 2em;
  width: 80%;
  color:white;

  `


const ContainerAdmin = () => {
    return (
        <Container>
            <Route exact path='/admin' render={() => <AdminProducts />} />
            <Route exact path='/admin/products' render={() => <AdminProducts />} />
            <Route exact path='/admin/categories' render={() => <AdminCategories />} />
            <Route exact path='/admin/products/:productId'
                render={({ match }) => <AdminProductDetails productId={match.params.productId} />}
            />
            <Route exact path='/admin/categories/:categoryId'
                render={({ match }) => <AdminCategoryDetails categoryId={match.params.categoryId} />}
            />

        </Container>
    )
}

export default ContainerAdmin
