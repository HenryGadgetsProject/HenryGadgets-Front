import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

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

const ProductCards = ({ products }) => {
    if(products.length > 0) {
        return (
            <>
                {products?.map(p => {
                    return(
                        <Link to={`/product/${p.id}`} key={p?.id}>
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
