import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LavaLoader from '../Components/Organisms/LavaLoader'

import styled from 'styled-components';

const Div = styled.div`
    align-items             : center;
    background              : url('https://i.imgur.com/huMkNiw.jpg');
    background-attachment   : fixed;
    background-position     : center center;
    background-repeat       : no-repeat;
    background-size         : cover;
    display                 : flex;
    flex-direction          : column;
    height                  : 100vh;
    justify-content         : center;
    overflow                : hidden;
    width                   : 100%;

    p {
        color               : #FFFFFF;
        font-size           : 6em;
        font-style          : italic;
        transition          : .55s;
        text-shadow         : 3px 5px 8px black;
        &:hover {
            transform       : scale(1.065);
        }
    }

    .loader {
        align-items         : center;
        display             : flex;
        justify-content     : center;
    }

    h2 {
        color               : #FFFFFF;
        text-shadow         : 3px 5px 8px black;
    }
`


const Landing = () => {
    const LoadingCategories = useSelector(state => state.category.loading)
    const LoadingProduct = useSelector(state => state.product.loading)
    const LoadingUsers = useSelector(state => state.user.loading)

    if (LoadingCategories === true && LoadingProduct === true && LoadingUsers === true) {
        return (
            <Div className="loader">
                <LavaLoader />
                <h2>Cargando...</h2>
            </Div>
        )
    } else {
        return (
            <Div>
                <Link to='/home'>
                    <p>Tenemos lo que buscas.</p>
                </Link>
            </Div>
        )
    }
}

export default Landing
