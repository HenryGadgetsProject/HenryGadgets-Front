import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { getHandys } from '../Redux/Actions/Handy/HandyActions'
import { getCategoriasProvisorio } from '../Redux/Actions/Categories/CategoriesActions'
import { getPopularHandys } from '../Redux/Actions/Handy/HandyActions'
import { Link } from 'react-router-dom'

import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: url('https://i.imgur.com/wNaz28c.jpg');
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

    useEffect(() => {
        // dispatch(getHandys())        
        dispatch(getCategoriasProvisorio())
        dispatch(getPopularHandys());
        // dispatch(searchCategories('lim'))
    }, [dispatch])

    return (
        <Div>
            <Link to='/home'>
                <p>Buscamos la solución a tu problema.</p>
            </Link>
        </Div>
    )
}

export default Landing
