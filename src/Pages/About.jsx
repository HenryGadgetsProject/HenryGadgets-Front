import React from 'react'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'

const About = () => {
    return (
        <div className="container">
            <Header id="header">
                <NavBar id="nav-general" />
                <Breadcrumb id="breadcrumb" />
            </Header>

            <Main id="main">
                <h3>Acerca de nosotros.</h3>
                <p>Esta App ha sido desarrollada como parte del proceso de aprendizaje en Henry.</p>
                <p>El reto en este punto, consistió en integrar de forma grupal tecnologías de frontend, backend y bases de datos con multiples funcionalidades para el usuario final y el administrador.</p>
                <p>Las tecnologías utilizadas para el desarrollo del proyecto fueron:</p>
                <ul>
                    <li>Node.</li>
                    <li>React.</li>
                    <li>Redux.</li>
                    <li>Express.</li>
                    <li>Sequelize - Postgres.</li>
                </ul>
                <p>Se espera poder mejorarla a futuro con las recomendaciones de cada evaluador, en busca de que quede como una de las Apps del portafolio.</p>
            </Main>
            
            <Footer />
        </div>
    )
}

export default About
