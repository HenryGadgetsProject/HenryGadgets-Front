import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import { getProductsById } from '../Redux/Actions/Product/ProductActions'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { addItemCart } from '../Redux/Actions/Cart/CartActions'
import NumberFormat from 'react-number-format';

import BigCard from '../Components/Atoms/BigCard'
import NotFound from './NotFound'

import styled from 'styled-components'

const CartIcon = styled.img`
    background: url('https://api.iconify.design/icons8:buy.svg?color=white') no-repeat center center / contain;
    height: 3em;
    width: 3em;
    padding: 1.5em;
`

const Product = ({ productId }) => {

    // const eyeIcon = 'https://api.iconify.design/bi-eye.svg?height=16'
    // const heartIcon = 'https://api.iconify.design/ant-design:heart-filled.svg'
    // const shareIcon = 'https://api.iconify.design/bi:share-fill.svg'

    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        dispatch(getProductsById(productId))
    }, [dispatch, productId])

    const product = useSelector(state => state.product.product)

    if (!product) {
        return <NotFound />
    }

    const handleClick = () => {
        const productSelected = { ...product, quantity: 1 }

        dispatch(addItemCart(productSelected))

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El producto se ha agregado al Carrito!',
            showConfirmButton: false,
            timer: 2000,
        })

        history.push('/home')
    }

    return (
        <div className="container">
            <NavBar className="nav" />
            <Breadcrumb id="breadcrumb" />

            <Main id="main">
                <BigCard>
                    <div className="thumbnail">
                        <img className="left" src={product.big_image} alt='left' />
                    </div>

                    <div className="right">
                        <Link to='/home'><div className="close">X</div></Link>
                        <h3>{product.name}</h3>

                        <StarRatings
                            rating={product.rating}
                            starDimension="1.2em"
                            starSpacing=".2em"
                            numberOfStars={5}
                            starRatedColor="gold"
                        />

                        <div className="separator"></div>
                        <span>Descripci??n</span><p>{product.description}</p>
                        <span>Stock</span>{product.stock > 0 ? <p>{product.stock}</p> : <p>No hay unidades disponibles.</p>}
                        <span>Precio</span><p><NumberFormat value={product.price} displayType={'text'} thousandSeparator='.' decimalSeparator=',' prefix={'$'} /></p>

                    </div>

                    <Link to={`/product/${productId}/reviews`}>
                        <button className="review">
                            Ver Opiniones
                        </button>
                    </Link>

                    {product.stock > 0 ? <button className="buy" onClick={handleClick}>
                        <CartIcon />
                    </button>
                        :
                        null
                    }
                </BigCard>
            </Main>

            <Footer />
        </div>
    )
}

export default Product
