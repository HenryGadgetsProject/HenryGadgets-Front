import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import { getProductsById } from '../Redux/Actions/Product/ProductActions'

import styled from 'styled-components'

const DetailedCard = styled.div`
    background          : var(--pure-white);
    border              : .3em solid var(--dark-primary);
    box-shadow          : 0 0 1em var(--font-color);
    display             : flex;
    flex-direction      : column;
    justify-self        : center;
    margin-top          : 3em;
    max-width           : 60em;
    padding             : 1em 3em;
    text-align          : justify;
    width               : 100%;

    h3 {
        color           : var(--pure-black);
        font-size       : 3em;
        margin          : .5em;
        text-align      : center;
        ${'' /* text-shadow     : .1em .2em .4em var(--light-primary); */}
    }

    img {
        width: 25em;
        height: 25em;
        margin-bottom   : 2em;
        padding         : .5em;
        place-self      : center;
        object-fit      : contain;
    }

    p {
        color           : var(--pure-black);
        font-size       : 2.2em;
        margin          : .5em;
    }
`

const Product = ({ productId }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsById(productId))
    }, [dispatch, productId])

    const product = useSelector(state => state.product.product)

    console.log(product)

    return (
        <div className="container">
        <Header id="header">
            {/* <h1>Henry Gadgets</h1> */}
        </Header>

        {/* const { id, name, price, stock, description, rating, big_image } = product */}

        <Main id="main">
            <DetailedCard>
                <h3>{product.name}</h3>
                <img src={product.big_image} alt={product.name} />
                <p>Descripción: {product.description}</p>
                <p>Rating: {product.rating}</p>
                <p>Stock: {product.stock} unidades</p>
                <p>{product.price} $</p>
            </DetailedCard>
        </Main>
        </div>
    )
}

export default Product
