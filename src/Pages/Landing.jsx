import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getProducts } from '../Redux/Actions/Handy/HandyActions'
import { getCategories } from '../Redux/Actions/Categories/CategoriesActions'
import { getPopularProducts, getProducts } from '../Redux/Actions/Product/ProductActions'
import { getUsers } from '../Redux/Actions/User/UserActions'
import { Link } from 'react-router-dom'
import Loader from '../Components/Molecules/Loader'

import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: url('https://i.imgur.com/huMkNiw.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;

    p {
        font-style: italic;
        font-size: 6em;
        color: white;
        transition: 0.55s;
        text-shadow: 3px 5px 8px black;
        &:hover {
            transform: scale(1.065);
        }
    }

    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2 {
        color: white;
        text-shadow: 3px 5px 8px black;
    }
`;

// const Title = styled.p`
//     font-style: italic;
//     font-size: 6em;
//     color: white;
//     transition: 0.55s;
//     text-shadow: 3px 5px 8px black;
//     &:hover {
//         transform: scale(1.065);
//     }
// `

const Landing = () => {

    const dispatch = useDispatch()

    const LoadingCategories = useSelector(state => state.category.loading)
    const LoadingProduct = useSelector(state => state.product.loading)
    const LoadingUsers = useSelector(state => state.user.loading)

    useEffect(() => { 
        dispatch(getCategories());
        dispatch(getPopularProducts());
        dispatch(getProducts());
        dispatch(getUsers());
    }, [dispatch])

    if (LoadingCategories === true && LoadingProduct === true && LoadingUsers === true) {
        return (
            <Div className="loader">
                <h2>Cargando...</h2>
            </Div>
        )
    } else {
        return (
            <Div>
                <Link to='/home'>
                    <p>Vendemos lo que buscas.</p>
                </Link>
            </Div>
        )
    }
}

export default Landing
