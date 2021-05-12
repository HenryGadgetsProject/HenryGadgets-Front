import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
    margin                  : 1.8em;
    max-height              : 35em;
    padding                 : 2em 2.5em;
    text-align              : center;
    transition              : all .3s ease;
    width                   : 30em;
    &:hover {
        border              : .5em solid var(--dark-primary);
        box-shadow          : 0px 0px 50px var(--font-color);
        box-sizing: border-box;
        transform           : scale(1.11);
    }

    img {
        border-radius       : 50%;
        height              : 13em;
        width               : 13em;
    }

    p {
        color               : var(--dark-primary);
        font-size           : 2.5em;
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

const HomeCards = () => {
    
    // No funciona el dispatch de Redux, llega como 'undefined'
    // Nunca se visualiza en Redux Dev Tools que se ejecutó el dispatch
    // const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)

    // useEffect(() => {
    //     dispatch(getProducts());
    // }, [dispatch])

    // console.log(products) // Undefined

    return (
        <div>
            {products.map(p => {
            return(
                <Link to={`/product/${p.id}`} key={p?.id}>
                    <Cards>
                        <img src={p.big_image} alt={p.name}></img><br />
                        <p>{p.name}</p>
                        <p>{p.price}$</p>
                        <p>{p.rating}</p>
                        {/* REVIEWS MODAL (Probablemente) */}
                        {/* {product.map(product => <span className="cat-name">{product.name}</span>)} */}
                    </Cards>
                </Link>
            )
        })}
            {/* <h3>No hay productos disponibles</h3> */}
        </div>
    )
}

export default HomeCards
