import React from 'react'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'

const About = () => {
    return (
        <div className="container">
            <Header id="header">
                <h1>Henry Gadgets</h1>
            </Header>

            <Main id="main">
                <h3>Acerca de nosotros.</h3>
            </Main>
        </div>
    )
}

export default About
