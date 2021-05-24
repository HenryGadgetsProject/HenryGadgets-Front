import React from 'react'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

const NotFoundContainer = styled.div`
    display             : flex;
    flex-direction      : column;
    justify-content     : center;
    align-items         : center;
    margin              : 2vw 10vw;
    max-width           : 100vw;
    padding             : .5em;
    text-align          : justify;
    width               : 100%;
    & > img {
        margin-bottom   : 2em;
        max-width       : 14em;
        padding         : .5em;
        place-self      : center;
    }

    h3 {
        margin: 0;
    }

    p {
        color           : ${props => props.theme.fontColor || '#393E46'};
        font-size       : 1.8em;
    }
`

const NotFound = () => {

    const history = useHistory();
    return (
        <div className="container">
            <NavBar className="nav" />
            <Breadcrumb id="breadcrumb" />
            {/* <Header id="header">
                <h1>Henry Gadgets</h1>
            </Header> */}

            <Main id="main">
                <NotFoundContainer>
                    <h3>Error 404 | La página no existe.</h3>

                    {/* {setTimeout(() => {
                        history.push('/home')
                    }, 3000)} */}

                    {/* <p>Lo sentimos, tu busqueda no ha retornado ningún resultado.</p>
                    <p>Probablemente el producto que estás buscando no existe".</p>
                    <p>Si lo deseas también puedes repetir la busqueda verificando el nombre, intentar una nueva busqueda con otro producto o regresar a la página principal para ver más opciones.</p> */}
                </NotFoundContainer>

                <Link to="/home">
                    <button className="review">Regresar</button>
                </Link>
            </Main>

            <Footer />
        </div>
    )
}

export default NotFound
