import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import DetailedCard from '../Components/Atoms/DetailedCard'
import { getProductsById } from '../Redux/Actions/Product/ProductActions'
import StarRatings from 'react-star-ratings'

import BigCard from '../Components/Atoms/BigCard'


const Product = ({ productId }) => {

    // const eyeIcon = 'https://api.iconify.design/bi-eye.svg?height=16'
    // const heartIcon = 'https://api.iconify.design/ant-design:heart-filled.svg'
    // const shareIcon = 'https://api.iconify.design/bi:share-fill.svg'

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
                        <img class="left" src={product.big_image} alt='left'/>
                    </div>

                    <div class="right">

                        <h3>{product.name}</h3>

                        <StarRatings
                        rating={product.rating}
                        starDimension="1.2em"
                        starSpacing=".2em"
                        numberOfStars={5}
                        starRatedColor="gold"
                        />

                        <div class="separator"></div>
                        <span>Descripción</span><p>{product.description}</p>
                        <span>Stock</span>{product.stock > 0 ? <p>{product.stock}</p> : <p>No hay unidades disponibles.</p>}
                        <span>Precio</span><p>{product.price} $</p>

                    </div>

                    {/* <h5>17</h5>
                    <h6>Mayo</h6> */}
                        
                    {/* <ul>
                        <li><img src={ eyeIcon } alt='eye' /></li>
                        <li><img src={ heartIcon } alt='heart' /></li>
                        <li><img src={ shareIcon } alt='share' /></li>
                    </ul> */}

                    <button class="buy">
                        Comprar
                    </button>

                </BigCard>

                {/* <DetailedCard>
                    <h3>{product.name}</h3>
                    <img src={product.big_image} alt={product.name} />
                    <p>Descripción: {product.description}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock} unidades</p>
                    <p>{product.price} $</p>
                </DetailedCard> */}
            </Main>

            <Footer />
        </div>
    )
}

export default Product
