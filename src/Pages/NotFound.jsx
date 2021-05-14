import React from 'react'
import Main from '../Components/Atoms/Main'

import styled from 'styled-components'

const NotFoundContainer = styled.div`
    display             : flex;
    flex-direction      : column;
    justify-self        : center;
    margin              : 0 auto;
    margin-top          : 8em;
    max-width           : 55em;
    padding             : .5em;
    text-align          : justify;
    width               : 100%;
    & > img {
        margin-bottom   : 2em;
        max-width       : 14em;
        padding         : .5em;
        place-self      : center;
    }
`

const NotFound = () => {
    return (
        <div className="container">
            <Main id="main">
                <NotFoundContainer>
                    <h2>Error 404 | La página no existe.</h2>

                    <p>Lo sentimos, tu busqueda no ha retornado ningún resultado.</p>
                    <p>Probablemente el producto que estás buscando no existe".</p>
                    <p>Si lo deseas también puedes repetir la busqueda verificando el nombre, intentar una nueva busqueda con otro producto o regresar a la página principal para ver más opciones.</p>
                </NotFoundContainer>
            </Main>
        </div>
    )
}

export default NotFound
