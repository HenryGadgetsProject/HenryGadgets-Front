import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addItemCart } from '../../../Redux/Actions/Cart/CartActions'
import { addToWishlist, makeWish, removeFromWishlist } from '../../../Redux/Actions/Wishlist/WishlistActions'
import NumberFormat from 'react-number-format';

import Swal from 'sweetalert2'
import StarRatings from 'react-star-ratings'
import styled from 'styled-components'
import { InfoWindow } from '@react-google-maps/api'

const Cards = styled.div`
    background              : var(--pure-white);
    border                  : .1em solid var(--divider);
    border-radius           : .3em;
    color                   : var(--pure-black);
    cursor                  : pointer;
    ${'' /* grid-template-columns   : repeat(2, auto);
    grid-auto-rows          : minmax(2em, auto);
    grid-gap                : 0.1em; */}
    
    ${'' /* margin                  : 1.8em; */}
    height                  : 35em;
    ${'' /* padding                 : 2em 2.5em; */}
    text-align              : center;
    transition              : all .3s linear;
    ${'' /* width                   : 30em; */}
    min-width               : 25em;
    &:hover {
        /* border              : .20em solid var(--dark-primary); */
        box-shadow          : 0px 0px 10px var(--font-color);
        box-sizing          : border-box;
        transform           : scale(1.01);
    }

    img {
        /* Sale Romper el Front */
        margin-top: -11em;
        /* Sale Romper el Front */
        height              : 16em;
        width               : 16em;
        object-fit          : contain;
    }

    p {
        color               : var(--pure-black);
        font-size           : 2em;
        margin              : .5em;
    }

    b {
        color               : var(--pure-black);
        font-size           : 1.6em;
    }

    span {
        color               : var(--secondary-text);
        font-size           : 1.4em;
        margin-right        : 1em;
        text-transform      : uppercase;
    }

    div {
        display: flex;
        justify-content: space-around;
    }

    button {

    }
`
const CartIcon = styled.img`
    background: url('https://api.iconify.design/fa-solid:cart-arrow-down.svg?color=%23212121') no-repeat center center / contain;
    height: 4em !important;
    width: 4em !important;
    padding: 2em;
    margin-top: 1.6em;
    transition: all .3s linear;
    &:hover {
        transform: scale(1.30);
    }
`
const WishIcon = styled.img`
    background: url('https://api.iconify.design/clarity:heart-solid.svg?color=%23212121') no-repeat center center / contain;
    height: 4em !important;
    width: 4em !important;
    padding: 2em;
    margin-top: 1.6em;
    transition: all .3s linear;
    &:hover {
        transform: scale(1.30);
    }
`
const WishIconRed = styled.img`
    background: url('https://api.iconify.design/clarity:heart-solid.svg?color=red') no-repeat center center / contain;
    height: 4em !important;
    width: 4em !important;
    padding: 2em;
    margin-top: 1.6em;
    transition: all .3s linear;
    &:hover {
        transform: scale(1.30);
    }
`

// Con esto rompemos el front
const IconsContainer = styled.div`
    margin-top: 11em;
`
// Con esto rompemos el front

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Box = styled.div`
  position: relative;
  width: 27.4em;
  height: 12em;
  overflow: hidden;
`
const Offer = styled.div`
  position: absolute;
  display: inline-block;
  top: 0.3em;
  right: 0.8em;
  max-width: 5em;
  color: white;
  font-weight: 600;
  font-size: 1.6em;
  z-index: 1;
  &::after{
    position: absolute;
    top: -1.5em;
    right: -6em;
    content: "";  
    height: 5em;
    width: 15em;
    transform: rotatez(45deg);
    background: var(--background-gradient);
    /* background-color: chartreuse; */
    z-index:-1;
  }
`

const ProductCards = ({ products }) => {

    const dispatch = useDispatch()


    const user = useSelector(state => state.user.user)
    const wishList = useSelector(state => state.wishlist.wishList)
    let wishM = wishList.map(w => w.id)

    const [wish, setWish] = useState(wishM)

    // const [wish, setWish] = useState([])


    const handleCart = (product) => {

        if (product.stock === 0) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'El producto no  tiene unidades disponibles',
                showConfirmButton: false,
                timer: 2000,
            })
            return

        }


        const productSelected = { ...product, quantity: 1, price: (product.price * (1 - product.discount)) }

        dispatch(addItemCart(productSelected))

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El producto se ha agregado al Carrito!',
            showConfirmButton: false,
            timer: 2000,
        })
    }

    const handleWishlist = (product) => {

        if (wishList.length > 0 && wishList.find(p => p.id === product.id)) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'El producto ya existe en la lista de deseos!',
                showConfirmButton: false,
                timer: 2000,
            })
            return
        }
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El producto se ha agregado a la lista!',
            showConfirmButton: false,
            timer: 1000,
        })
        dispatch(addToWishlist(user, product))
        setWish([...wish, product.id])
    }

    const handleLogin = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar como Usuario para usar la Lista de deseados!'
        })
    }

    const handleNoWishlist = (product) => {
        dispatch(removeFromWishlist(user, product))
        setWish([wish.filter(w => w.id !== product.id)])
    }

    if (products.length > 0) {
        return (
            <>
                {products?.map(p => {
                    return (
                        <div className="card-container" key={p?.id}>
                            <Cards>

                                <Link to={`/product/${p.id}`}>

                                    {/* Box SIEMPRE debe estar renderizado */}
                                    <Box>
                                        {(p.discount > 0.00) ?
                                            <Offer>
                                                {(p.discount * 100)} % <br />
                                            </Offer>
                                            : null
                                        }
                                    </Box>

                                    <img src={p.big_image} alt={p.name}></img><br />
                                    <p>{p.name}</p>

                                    <p><NumberFormat value={p.price * (1 - p.discount)}

                                        displayType={'text'} thousandSeparator='.' decimalSeparator=',' prefix={'$'} /></p>

                                    <span className="center">
                                        <StarRatings
                                            rating={p.rating}
                                            starDimension="1em"
                                            starSpacing=".2em"
                                            numberOfStars={5}
                                            starRatedColor="gold"
                                        />
                                    </span>
                                    {/* REVIEWS MODAL (Probablemente) */}
                                    {/* {product.map(product => <span className="cat-name">{product.name}</span>)} */}
                                </Link>

                                <IconsContainer>
                                    {(user.id) ?
                                        <div>
                                            {(!wish.includes(p.id)) ? <WishIcon onClick={() => handleWishlist(p)} /> : <WishIconRed />}
                                        </div>
                                        : <WishIcon onClick={handleLogin} />
                                    }


                                    <CartIcon onClick={() => handleCart(p)} />
                                </IconsContainer>

                            </Cards>
                            {/* <button className="buy" onClick={handleClick}>
                            <CartIcon />
                        </button> */}
                        </div>
                    )
                })}
            </>
        )
    } else {
        return (
            <h2>Actualmente sin productos disponibles.</h2>
        )
    }
}

export default ProductCards
