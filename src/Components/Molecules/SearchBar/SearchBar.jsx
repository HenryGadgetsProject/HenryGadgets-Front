import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProducts } from '../../../Redux/Actions/Product/ProductActions'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce'

import styled from 'styled-components'

// Styled Components
const Input = styled.input`
    background          : var(--pure-white);
    border              : none;
    ${'' /* box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1); */}
    font-size           : 1.3em;
    font-weight         : 600;
    height              : 2.5em;
    margin              : 1.3em;
    outline             : none;
    padding-left        : 1em;
    ${'' /* text-transform      : capitalize; */}
    min-width           : 25em;
    ${'' /* width           : 40em; */}


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        margin-right    : 3em;
        min-width       : 18em;
    }
`

const SuggestContainer = styled.div`
    ${'' /* display:none; */}
    ${'' /* border-radius       : .3em; */}
    margin              : -1.7em 0 0 1.7em;
    height              : 25em;
    ${'' /* max-width           : 21.35em; */}
    overflow            : scroll;
    scrollbar-width     : none; /* Firefox */
    width               : 32.5em;
    -ms-overflow-style  : none; /* IE and Edge */
    &::-webkit-scrollbar {
        display         : none;
    }

    ul {
        display         : contents;
    }

    li {
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
            background-color: #FF616F;
            color           : var(--pure-white);
            cursor          : pointer;
            transform       : scale(1.05);
        }
    }
`

// const Ul = styled.ul`
//     display             : contents;
// `

// const Li = styled.li`
//     background          : var(--pure-white);
//     ${'' /* border-bottom       : 1px solid var(--pure-white); */}
//     color               : var(--pure-black);
//     display             : block;
//     font-size           : 1.6em;
//     font-weight         : 400;
//     height              : 1.6em;
//     padding-left        : 1em;
//     transition          : .3s;
//     &:hover {
//         /* background-color: var(--default-primary); */
//         background-color: #FF616F;
//         color           : var(--pure-white);
//         cursor          : pointer;
//         transform       : scale(1.05);
//     }
// `

const SearchBar = () => {

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

export default SearchBar
