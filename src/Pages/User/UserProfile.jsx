import React from 'react'
import NavBar from '../../Components/Organisms/NavBar'
import { useSelector } from 'react-redux'
import Breadcrumb from '../../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../../Components/Atoms/Main'
import Table from '../../Components/Atoms/Table'
import Footer from '../../Components/Organisms/Footer'
import styled from 'styled-components'

const Aside = styled.aside`
display: flex;
flex-direction: column;
align-items: center;
background  : black;
border      : none;
padding     : 2em;
height: 100vh;

img {
    border          : none;
    margin-right    : 1.6em;
    outline         : none;
    padding         : 1em;
}

span {
    color           : #FFFFFF;
    font-size       : 2em;
}

p {
    color           : #FFFFFF;
    font-size: 2em;
}

${'' /* =================================================
MEDIUM - CHECK TABLET HORIZONTAL VIEW 1024px
===================================================== */}
@media(min-width: 992px) and (max-width: 1199px) {
    img {
        margin      : 1em auto;
    }

    span {
        display     : none;
    }
}

${'' /* =================================================
SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
===================================================== */}
@media(max-width: 992px) {
    
}
`
const UserSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: 100%;

    /* Me fuí al baño */

    table {
        margin: 0 auto;
        padding: 2em;

        caption {
            color: black;
        }
    }
`

const UserProfile = () => {

    const user = useSelector(state => state.user.user)
    const orders = useSelector(state => state.order.orders)
    console.log(orders)

    return (
        <div className="container">
            <NavBar className="nav" />
            <Breadcrumb id="breadcrumb"/>
            <Main id="main">
                <Aside>

                    <img src='https://i.dlpng.com/static/png/5066008-circled-user-icon-user-profile-icon-png-png-image-transparent-profile-icon-png-820_860_preview.png' alt='profile'></img>

                    <div>
                        <p>Usuario</p>
                        <p>{user.first_name} {user.last_name}</p>
                        <p>Email</p>
                        <p>{user.email}</p>
                    </div>
                </Aside>
                <UserSection>
                    <Table>
                        <caption>Historial</caption>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th className="name">Fecha</th>
                                <th>Monto</th>
                                <th>Ver Detalles</th>
                            </tr>
                        </thead>

                        <tbody>                        
                            <tr key="123">
                                <td data-label="ID" className="center-text">1</td>
                                <td data-label="Fecha" className="center-text">Fecha</td>
                                <td data-label="Monto" className="center-text">Monto</td>                        
                                <td data-label="Detalles">Detalles</td>
                            </tr>                       
                        </tbody>
                    </Table>
                    
                    <Table>
                        <caption>Detalles</caption>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th className="name">Producto</th>
                                <th>Cantidad</th>
                                <th>Monto</th>
                                <th>Review</th>
                            </tr>
                        </thead>

                        <tbody>                        
                            <tr key="123">
                                <td data-label="ID" className="center-text">1</td>
                                <td data-label="Producto">Producto</td>
                                <td data-label="Cantidad" className="center-text">Cantidad</td>                        
                                <td data-label="Monto" className="center-text">Monto</td>
                                <td data-label="Review">Link al Formulario</td> 
                            </tr>                       
                        </tbody>
                    </Table>
                </UserSection>
            </Main>

            <Footer/>

        </div>
    )
}

export default UserProfile