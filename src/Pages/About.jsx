import React from 'react'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Header from '../Components/Atoms/Header'
import Footer from '../Components/Organisms/Footer'
import styled from 'styled-components'

import alumnos from '../Data/alumnos'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Description = styled.div`
    text-align: center;
    font-size: 2em;
    h4 {
        color: var(--font-color);
    }
    li {
        color: var(--font-color);
    }
    p {
        color: var(--font-color);
    }
    ul {
        display: flex;
        justify-content: space-around;
    }
`
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const Card = styled.div`
    padding: 0 4em 0 4em;
    text-align: center;
    p {
        color: var(--font-color);
        font-size: 1.8em;
        font-weight: 600;
    }
`
const ProfilePic = styled.img`
    width: 14em;
    height: 14em;
    border-radius: 50%;
`
const GitHubIcon = styled.img`
    margin: 0 1em 0 1em;
    height: 3em;
    width: 3em;
    padding: 1.6em;
    background: url('https://api.iconify.design/akar-icons:github-fill.svg') no-repeat center center / contain;
`
const LinkedInIcon = styled.img`
    margin: 0 1em 0 1em;
    height: 3em;
    width: 3em;
    padding: 1.6em;
    background: url('https://api.iconify.design/logos:linkedin-icon.svg') no-repeat center center / contain;
`
const Alex = styled.img`
    width: 14em;
    height: 14em;
    border-radius: 50%;
    background: var(--pic-alex) center center / cover;
`
const Eduardo = styled.img`
    width: 14em;
    height: 14em;
    border-radius: 50%;
    background: var(--pic-eduardo) center center / cover;
`
const Guillermo = styled.img`
    width: 14em;
    height: 14em;
    border-radius: 50%;
    background: var(--pic-guille) center center / cover;
`
const Juan = styled.img`
    width: 14em;
    height: 14em;
    border-radius: 50%;
    background: var(--pic-juan) center center / cover;
`
const Leonardo = styled.img`
    width: 14em;
    height: 14em;
    border-radius: 50%;
    background: var(--pic-leo) center center / cover;
`
const Marco = styled.img`
    width: 14em;
    height: 14em;
    border-radius: 50%;
    background: var(--pic-marco) center center / cover;
`

const About = () => {
    return (
        <div>
            <Header id="header">
                <NavBar id="nav-general" />
                <Breadcrumb id="breadcrumb" />
            </Header>

            <Container>
            <h3>El Equipo</h3>
                <CardContainer>

                    <Card>
                        <Alex/>
                        <p>Alex Leon</p>
                        <GitHubIcon/>
                        <a href='https://www.linkedin.com/in/alex81-dev/' target="blank"><LinkedInIcon/></a>
                    </Card>
                    <Card>
                        <Eduardo/>
                        <p>Eduardo Campili</p>
                        <GitHubIcon/>
                        <a href='https://www.linkedin.com/in/ecampili/' target="blank"><LinkedInIcon/></a>
                    </Card>
                    <Card>
                        <Guillermo/>
                        <p>Guillermo Bravo</p>
                        <GitHubIcon/>
                        <a href='https://www.linkedin.com/in/guillermo-bravo-294499208/' target="blank"><LinkedInIcon/></a>
                    </Card>
                    <Card>
                        <Juan/>
                        <p>Juan Felici</p>
                        <GitHubIcon/>
                        <a href='https://www.linkedin.com/in/juan-bautista-felici-b1069443/' target="blank"><LinkedInIcon/></a>
                    </Card>
                    <Card>
                        <Leonardo/>
                        <p>Leonardo Rosales</p>
                        <GitHubIcon/>
                        <a href='https://www.linkedin.com/in/lrosales-leo/' target="blank"><LinkedInIcon/></a>
                    </Card>
                    <Card>
                        <Marco/>
                        <p>Marco Camparone</p>
                        <GitHubIcon/>
                        <a href='https://www.linkedin.com/in/marco-antonio-camparone-dev/' target="blank"><LinkedInIcon/></a>
                    </Card>

                </CardContainer>

                <Description>
                {/* <p>Esta App ha sido desarrollada como parte del proceso de aprendizaje en Henry.</p> */}
                <p>El reto en este punto, consistió en integrar de forma grupal tecnologías de frontend, backend y bases de datos con multiples funcionalidades para el usuario final y el administrador.</p>
                <h4>Las tecnologías utilizadas para el desarrollo del proyecto fueron:</h4>
                <ul>
                    <li>Node</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>Sequelize</li>
                </ul>
                <p>Se espera poder mejorarla a futuro con las recomendaciones de cada evaluador, en busca de que quede como una de las Apps del portafolio.</p>
                </Description>
            </Container>
            <Footer />
        </div>
    )
}

export default About
