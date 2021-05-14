import React from 'react'
import styled from "styled-components"
import { Route } from 'react-router-dom'
import AdminProducts from '../../Pages/Admin/AdminProducts'
import AdminCategories from '../../Pages/Admin/AdminCategories'

const Container = styled.div`
  align-self: right;
  background: #424242;  
  padding: .3em 2em;
  width: 80%;

  `


const ContainerAdmin = () => {
    return (
        <Container>
            <Route exact path='/admin' render={() => <AdminProducts />} />
            <Route exact path='/admin/products' render={() => <AdminProducts />} />
            <Route exact path='/admin/categories' render={() => <AdminCategories />} />
        </Container>
    )
}

export default ContainerAdmin
