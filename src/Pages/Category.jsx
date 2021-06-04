import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategoryId } from '../Redux/Actions/Product/ProductActions'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Main from '../Components/Atoms/Main'
import ProductCards from '../Components/Organisms/ProductCards'
import Footer from '../Components/Organisms/Footer'


const Category = ({ categoryId }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsByCategoryId(parseInt(categoryId)))
    }, [dispatch, categoryId])

    const products = useSelector(state => state.product.filteredProducts)

    return (
        <div className="container">
            <NavBar id="nav-general" />
            <Breadcrumb id="breadcrumb" />

            {products.length === 0 ?
                <Main id="main">
                    <h3>Aún no existen productos para esta categoría.</h3>
                </Main>
                :
                <Main id="main">
                    <ProductCards products={products} />
                </Main>
            }

            <Footer />
        </div>
    )
}

export default Category;
