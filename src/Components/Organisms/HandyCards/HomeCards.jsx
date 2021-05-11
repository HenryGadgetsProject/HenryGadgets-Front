import React from 'react'
import { Link } from 'react-router-dom'
// import Button from '../../Atoms/Button'

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


const HomeCards = ({ handy }) => {
    const { id, name, rating, categories, picture } = handy

    return (
        <Link to={`/handyx/${id}`} key={id}>
            <Cards onClick={() => console.log(id)}>
                <img src={picture} alt={name}></img><br />
                <p>{name}</p>
                <b>{rating} ⭐</b><br /><br />
                {categories.map(category => <span className="cat-name">{category.name}</span>)}
            </Cards>
        </Link>
    )
}

export default HomeCards
