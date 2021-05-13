import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProducts } from '../../../Redux/Actions/Product/ProductActions'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

// Styled Components
const Input = styled.input`
    background      : var(--pure-white);
    border          : .2em solid var(--pure-black);
    /* border-radius   : 3em; */
    ${'' /* box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1); */}
    font-size       : 1.3em;
    font-weight     : 600;
    height          : 3em;
    margin          : 1.23em 3em 0 0;
    padding-left    : 1em;
    text-transform  : capitalize;
    min-width       : 25em;
    ${'' /* width           : 40em; */}
`

const SuggestContainer = styled.div`
    border-radius       : .3em;
    margin-left         : 0.2em;
    max-height          : 24em;
    ${'' /* max-width           : 21.35em; */}
    width               : 32.1em;
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

    const handleClick = () => {
        setInputValue('');
        setOptions([]);
    }


    // ------------------------------------- REVISAR SEARCHBAR --------------------------------
    // Los dispatch me traen todos los productos en vez de hacer un filtrado correctamente por el value

    const handleChange = (e) => {
        setOptions(foundProducts);
        setInputValue(e.target.value);
        if (inputValue.length > 2) {
            dispatch(searchProducts(inputValue))
        } else {
            dispatch(searchProducts(inputValue))
            setOptions([])
        }
    }

    return (
        <div>
            <Input
                value={inputValue}
                onChange={handleChange}
                placeholder="🔍 Buscar un producto..."
            />
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
        </div>
    )
}

export default SearchBar
