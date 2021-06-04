import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategoryId } from '../Redux/Actions/Product/ProductActions'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import ProductCards from '../Components/Organisms/ProductCards'

import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 95%;
    margin: 0 auto;
`

const Category = ({ categoryId }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsByCategoryId(parseInt(categoryId)))
    }, [dispatch, categoryId])

    const products = useSelector(state => state.product.filteredProducts)

    return (
        <>
            <NavBar id="nav-general" />
            <Breadcrumb id="breadcrumb" />
            {/* <Header id="header">
                <h1>Henry Gadgets</h1>
            </Header> */}

            {products.length === 0 ?
                <Main id="main">
                    <h3>Aún no existen productos para esta categoría.</h3>
                </Main>
                :
                <Container>
                        <h3>Listado de Productos</h3>
                        <CardContainer>
                            <ProductCards products={products} />
                        </CardContainer>
                </Container>
            }
            <Footer />
        </>
    )
}

export default Category;
