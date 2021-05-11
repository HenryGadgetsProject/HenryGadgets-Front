import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import { getHandysById } from '../Redux/Actions/Handy/HandyActions'

import styled from 'styled-components'

const DetailedCard = styled.div`
    background          : var(--pure-white);
    border              : .5em solid var(--dark-primary);
    box-shadow          : 0 0 2em var(--font-color);
    display             : flex;
    flex-direction      : column;
    justify-self        : center;
    margin-top          : 3em;
    max-width           : 60em;
    padding             : 1em 3em;
    text-align          : justify;
    width               : 100%;

    h3 {
        color           : var(--pure-black);
        font-size       : 3em;
        margin          : .5em;
        text-align      : center;
        ${'' /* text-shadow     : .1em .2em .4em var(--light-primary); */}
    }

    img {
        border-radius   : 50%;
        margin-bottom   : 2em;
        max-width       : 14em;
        padding         : .5em;
        place-self      : center;
    }

    p {
        color           : var(--pure-black);
        font-size       : 3em;
        margin          : .5em;
    }
`

const HandyPage = ({ handyId }) => {
    console.log('HANDY', handyId)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHandysById(handyId))
    }, [dispatch, handyId])

    const handy = useSelector(state => state.handler.handy)

    console.log(handy)


    return (
        <div className="container">
        <Header id="header">
            <h1>HandyX</h1>
        </Header>

        <Main id="main">
            <DetailedCard>
                {/* <HomeCards handy={handy} /> */}
                <h3>{handy.name}</h3>
                {/* <h3>{handy.categories.map(category => <span className="pepe">{category.name}</span>)}</h3> */}
                <img src={handy.picture} alt={handy.name} />
                <p>{`${handy.email}`}</p>
                <p>{`Dirección: ${handy.address}`}</p>
                <p>{`Costo de visita: ${handy.visitfee}$`}</p>
                <p>{`Teléfono: ${handy.phone}`}</p>
                <p>{`DNI: ${handy.dni}`}</p>
            </DetailedCard>
        </Main>
        </div>
    )
}

export default HandyPage
