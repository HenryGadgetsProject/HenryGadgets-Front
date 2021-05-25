import React from 'react'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Footer from '../Components/Organisms/Footer'
import NavBar from '../Components/Organisms/NavBar'
import StarRatings from 'react-star-ratings'

import styled from 'styled-components'
import ReviewsForm from '../Components/Organisms/ReviewsForm'

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const Item = styled.div`
    background: var(--pure-white);
    border: .1em solid var(--divider);
    padding: 1em 2em 1em 2em;
    margin: 2em;
    width: 30%;
    /* box-shadow: 0px 0px 5px var(--font-color); */
    box-sizing: border-box;
    transition: .3s;
    box-shadow: var(--divider) 7px 7px;
    &:hover {
        transform: scale(1.05);
    }
`
const Title = styled.p`
    color:#ff1744;
    font-size: 2em;
`
const Description = styled.span`
    color: #212121;
    font-size: 1.6em;
    font-style: italic;
`

const Reviews = ({id, description, rating}) => {

    const rating5 = 5

    return (
        <>
            <NavBar/>
            <Breadcrumb id="breadcrumb" />
                <h1>Pagina de Reviews</h1>

                <Container>
                    {/* Mapear Items */}
                    <Item>
                        <Title>Opinion</Title>
                        <Description>"El mejor del mercadoEl mejor del mercadoEl mejor del mercadoEl mejor del mercado"</Description>
                        <Title>Puntaje</Title>
                        <StarRatings
                                rating={rating5}
                                starDimension="1.2em"
                                starSpacing=".2em"
                                numberOfStars={5}
                                starRatedColor="gold"
                        />
                    </Item>
                </Container>

                <ReviewsForm/>

            <Footer/>
        </>
    )
}

export default Reviews
