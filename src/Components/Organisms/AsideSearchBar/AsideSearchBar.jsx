import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchProducts } from '../../../Redux/Actions/Product/ProductActions'
import debounce from 'lodash.debounce'

import styled from 'styled-components'

// Styled Components
const Input = styled.input`
    align-self              : center;
    background              : var(--pure-white);
    border                  : none;
    border-radius           : 3em;
    font-size               : 1.3em;
    ${'' /* height                  : 3em; */}
    height                  : 2.8em;
    margin                  : 0 auto;
    outline                 : none;
    padding-left            : 1em;
    ${'' /* position                : relative; */}
    ${'' /* top                     : -2.2em; */}
    width                   : 50vw;
`

const SuggestContainer = styled.div`
    margin                  : -3em 0 0 1.4em;
    height                  : 25.5em;
    overflow-y              : scroll;
    padding-left            : .5em;
    scrollbar-width         : none; /* Firefox */
    width                   : 44.5vw;
    -ms-overflow-style      : none; /* IE and Edge */
    &::-webkit-scrollbar {
        display             : none;
    }

    ul {
        display             : contents;
    }

    li {
        align-items: center;
        background          : var(--pure-white);
        color               : var(--pure-black);
        display             : flex;
        font-size           : 1.6em;
        font-weight         : 400;
        height              : 1.6em;
        padding-left        : 1em;
        transition          : all .3s linear;
        &:hover {
            background-color: var(--default-primary);
            color           : var(--pure-white);
            cursor          : pointer;
        }
    }
`

const AsideSearchBar = () => {

    const dispatch = useDispatch()
    const foundProducts = useSelector(state => state.product.searchProducts)

    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);

    const delayInput = useCallback(
        debounce((input) => dispatch(searchProducts(input)), 300), []);

    const handleChange = (e) => {
        setOptions(foundProducts);
        setInputValue(e.target.value);
        if (inputValue.length > 2) {
            delayInput(e.target.value)
            // dispatch(searchProducts(inputValue))
        } else {
            delayInput(e.target.value)
            // dispatch(searchProducts(inputValue))
            setOptions([])
        }
    }

    // Busca en caso de no encontrar alguna sugerencia
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchProducts(inputValue))
    }

    // Vacía la barra de autocompletado al hacer click en una sugerencia
    const handleClick = () => {
        setInputValue('');
        setOptions([]);
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <Input
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="🔍 Buscar un producto..."
                />

                { inputValue.length > 2 ?
                    <SuggestContainer>
                        <ul>
                            {options.length > 0 ?
                                options.map((products) => (
                                    <Link to={`/product/${products.id}`} key={products.id} onClick={handleClick}>
                                        <li key={`${products.id}`}>
                                            {products.name}
                                        </li>
                                    </Link>
                                ))
                            : null}
                        </ul>
                    </SuggestContainer>
                    :
                    null
                }
            </form>
        </div>
    )
}

export default AsideSearchBar
