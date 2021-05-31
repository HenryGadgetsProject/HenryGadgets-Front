import React from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from '../../Components/Organisms/NavBar'
import Breadcrumb from '../../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../../Components/Atoms/Main'
// import Table from '../../Components/Atoms/Table'
import UserOrders from '../../Components/Organisms/UserOrders'
import ReviewsForm from '../../Components/Organisms/ReviewsForm'
import Footer from '../../Components/Organisms/Footer'
// import { filterOrdersByUserId } from '../../Redux/Actions/Order/OrderActions'
// import { getReviewsByUserId } from '../../Redux/Actions/Review/ReviewActions'

import styled from 'styled-components'

const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    background  : black;
    border      : none;
    padding     : 2em;
    ${'' /* min-height: 100%; */}

    img {
        width: 20em;
        border-radius   : 50%;
        border          : none;
        margin          : 0 auto;
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
    ${'' /* flex-wrap: wrap; */}
    flex-direction: column;
    align-items: flex-start;

    background: #424242;

    ${'' /* min-height: 100%; */}

    table {
        font-size: 1.2em;
        margin: 0 auto;

        caption {
            color: white;
        }
    }
`

const UserProfile = () => {
    const user = useSelector(state => state.user.user)

    return (
        <div className="container">
            <NavBar className="nav" />
            <Breadcrumb id="breadcrumb" />
            <Main id="main">
                <Aside>
                    <img src={user.photo} alt={user.first_name}></img>
                    <div>
                        <p>Usuario</p>
                        <p>{user.first_name} {user.last_name}</p>
                        <p>Email</p>
                        <p>{user.email}</p>
                    </div>
                    <p>Suscripciones</p>
                    <button>Suscribirse</button>
                </Aside>

                <UserSection>
                    <Route exact path='/user' render={() => <UserOrders />} />
                    <Route exact path='/user/review' render={() => <ReviewsForm />} />
                </UserSection>
            </Main>

            <Footer />

        </div>
    )
}

export default UserProfile
