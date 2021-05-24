import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

// import { useDispatch, useSelector } from 'react-redux'
// import Swal from 'sweetalert2'
// import { addItemCart } from '../../../Redux/Actions/Cart/CartActions'

import styled from 'styled-components'

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
    transition              : all .3s ease;
    width                   : 30em;
    &:hover {
        /* border              : .20em solid var(--dark-primary); */
        box-shadow          : 0px 0px 10px var(--font-color);
        box-sizing          : border-box;
        transform           : scale(1.01);
    }

    img {
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

    button {

    }
`

const CartIcon = styled.img`
    background: url('https://api.iconify.design/icons8:buy.svg?color=white') no-repeat center center / contain;
    height: 1em;
    width: 1em;
    padding: .1em;
`

const ProductCards = ({ products }) => {
    // const dispatch = useDispatch()

    // const product = useSelector(state => state.product.product)

    // const handleClick = () => {
    //     const productSelected = { ...product, quantity: 1 }

    //     dispatch(addItemCart(productSelected))

    //     Swal.fire({
    //         position: 'top-end',
    //         icon: 'success',
    //         title: 'El producto se ha agregado al Carrito!',
    //         showConfirmButton: false,
    //         timer: 2000,
    //     })
    // }

    if(products.length > 0) {
        return (
            <>
                {products?.map(p => {
                    return(
                        <div className="card-container" key={p?.id}>
                        <Link to={`/product/${p.id}`}>
                            <Cards>
                                <img src={p.big_image} alt={p.name}></img><br />
                                <p>{p.name}</p>
                                <p>{p.price} $</p>
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
                            </Cards>
                        </Link>
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
