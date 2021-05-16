import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import DetailedCard from '../Components/Atoms/DetailedCard'
import { getProductsById } from '../Redux/Actions/Product/ProductActions'

import BigCard from '../Components/Atoms/BigCard'


const Product = ({ productId }) => {
    const eyeIcon = 'https://api.iconify.design/bi-eye.svg?height=16'
    const heartIcon = 'https://code.iconify.design/1/1.0.7/iconify.min.js'
    const shareIcon = 'https://code.iconify.design/1/1.0.7/iconify.min.js'

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsById(productId))
    }, [dispatch, productId])

    const product = useSelector(state => state.product.product)

    return (
        <div className="container">
            <NavBar className="nav" />
            <Breadcrumb id="breadcrumb" />
            {/* <Header id="header">
                <h1>Henry Gadgets</h1>
            </Header> */}

            {/* const { id, name, price, stock, description, rating, big_image } = product */}

            <Main id="main">
                <BigCard>
                    <div class="thumbnail">
                        <img class="left" src={product.big_image} />
                    </div>

                    <div class="right">
                        <h3>{product.name}</h3>
                        <div class="stars">
                            <h2>Rating: {product.rating}</h2>
                        </div>

                        <div class="separator"></div>
                        <p>Descripción: {product.description}</p>
                        <p>Stock: {product.stock} unidades</p>
                        <p>{product.price} $</p>
                    </div>

                    <h5>17</h5>
                    <h6>Mayo</h6>
                        
                    <ul>
                        <li><img src={ eyeIcon } alt='eye' /></li>
                        <li><img src={ heartIcon } alt='heart' /></li>
                        <li><img src={ shareIcon } alt='share' /></li>
                    </ul>

                    <button class="buy">
                        Comprar
                    </button>
                </BigCard>

                <DetailedCard>
                    <h3>{product.name}</h3>
                    <img src={product.big_image} alt={product.name} />
                    <p>Descripción: {product.description}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock} unidades</p>
                    <p>{product.price} $</p>
                </DetailedCard>
            </Main>

            <Footer />
        </div>
    )
}

export default Product
