import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import { getProductsById } from '../Redux/Actions/Product/ProductActions'

import styled from 'styled-components'

const DetailedCard = styled.div`
    background          : var(--pure-white);
    border              : .5em solid var(--dark-primary);
    box-shadow          : 0 0 2em var(--font-color);
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
        border-radius   : 50%;
        margin-bottom   : 2em;
        max-width       : 14em;
        padding         : .5em;
        place-self      : center;
    }

    p {
        color           : var(--pure-black);
        font-size       : 3em;
        margin          : .5em;
    }
`

const Product = ({ productId }) => {
    console.log('PRODUCT', productId)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsById(productId))
    }, [dispatch, productId])

    const product = useSelector(state => state.product.product)

    console.log(product)


    return (
        <div className="container">
        <Header id="header">
            <h1>Henry Gadgets</h1>
        </Header>

        <Main id="main">
            <DetailedCard>
                {/* <HomeCards product={product} /> */}
                <h3>{product.name}</h3>
                {/* <h3>{product.categories.map(category => <span className="pepe">{category.name}</span>)}</h3> */}
                <img src={product.picture} alt={product.name} />
                {/* <p>{`${product.email}`}</p> */}
                {/* <p>{`Dirección: ${product.address}`}</p> */}
                {/* <p>{`Costo de visita: ${product.visitfee}$`}</p> */}
                {/* <p>{`Teléfono: ${product.phone}`}</p> */}
                {/* <p>{`DNI: ${product.dni}`}</p> */}
            </DetailedCard>
        </Main>
        </div>
    )
}

export default Product
