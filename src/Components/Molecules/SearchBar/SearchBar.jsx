import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProducts } from '../../../Redux/Actions/Product/ProductActions'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce';

import styled from 'styled-components'

// Styled Components
const Input = styled.input`
    background      : var(--pure-white);
    border          : none;
    border-radius   : 3em;
    ${'' /* box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1); */}
    font-size       : 1.3em;
    font-weight     : 600;
    height          : 5vh;
    margin          : 1.23em 3em 0 0;
    outline         : none;
    padding-left    : 1em;
    text-transform  : capitalize;
    min-width       : 25em;
    ${'' /* width           : 40em; */}
`

const SuggestContainer = styled.div`
    /* display:none; */
    ${'' /* border-radius       : .3em; */}
    margin-left         : 1.8em;
    height              : 25em;
    ${'' /* max-width           : 21.35em; */}
    width               : 29em;
    overflow            : scroll;
    &::-webkit-scrollbar {
        display         : none;
    }
    -ms-overflow-style  : none; /* IE and Edge */
    scrollbar-width     : none; /* Firefox */
`

const Ul = styled.ul`
    display             : contents;
`

const Li = styled.li`
    background          : var(--pure-white);
    ${'' /* border-bottom       : 1px solid var(--pure-white); */}
    color               : var(--pure-black);
    display             : block;
    font-size           : 1.6em;
    font-weight         : 400;
    height              : 1.6em;
    padding-left        : 1em;
    transition          : .3s;
    &:hover {
        /* background-color: var(--default-primary); */
        background-color: #ff616f;
        color           : var(--pure-white);
        cursor          : pointer;
        transform       : scale(1.05);
    }
`

const SearchBar = () => {

    const dispatch = useDispatch()
    const foundProducts = useSelector(state => state.product.filteredProducts)

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
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="🔍 Buscar un producto..."
                />
                {/* <input type="submit" value="Buscar"/> */}
                <SuggestContainer>
                    <Ul>
                        {options.length > 0 ?
                            options.map((products) => (
                                <Link to={`/product/${products.id}`} key={products.id} onClick={handleClick}>
                                    <Li key={`${products.id}`}>
                                        {products.name}
                                    </Li>
                                </Link>
                            )) : null}
                    </Ul>
                </SuggestContainer>
            </form>
        </>
    )
}

export default SearchBar
