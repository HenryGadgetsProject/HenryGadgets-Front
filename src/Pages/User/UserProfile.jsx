import React from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from '../../Components/Organisms/NavBar'
import Breadcrumb from '../../Components/Atoms/Breadcrumb'
import Main from '../../Components/Atoms/Main'
import UserOrders from '../../Components/Organisms/UserOrders'
import ReviewsForm from '../../Components/Organisms/ReviewsForm'
import Footer from '../../Components/Organisms/Footer'
// import Header from '../Components/Atoms/Header'
// import Table from '../../Components/Atoms/Table'

import styled from 'styled-components'

const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    background  : var(--aside-home);
    border      : none;
    padding     : 2em;

    div {
        display: flex;
        flex-direction: column;
    }

    img {        
        border          : none;
        margin          : 0 auto;
        outline         : none;
        padding         : 1em;
    }

    .profilePic {
        border-radius   : 50%;
        height          : 16em;
        width           : 16em;
    }

    .icon {
        border-radius   : 0;
        height          : 2em;
        width           : 2em;
    }

    span {
        display: flex;
        justify-content: center;
        color           : var(--font-color);
        font-size       : 2em;
    }

    p {
        color           : var(--font-color);
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
    flex-direction: row;
    align-items: flex-start;
    background: var(--body);

    table {
        font-size: 1.2em;
        margin: 0 auto;

        caption {
            color: white;
        }
    }
`
const UserIcon = styled.img`
    background: url('https://api.iconify.design/si-glyph:badge-name.svg?color=white') no-repeat center center / contain;
`
const EmailIcon = styled.img`
    background: url('https://api.iconify.design/clarity:email-solid.svg?color=white') no-repeat center center / contain;
`
const BellIcon = styled.img`
    background: url('https://api.iconify.design/bi:bell-fill.svg?color=white') no-repeat center center / contain;
`

const UserProfile = () => {

    const user = useSelector(state => state.user.user)

    return (
        <div className="container">
            <NavBar className="nav" />
            <Breadcrumb id="breadcrumb" />
            <Main id="main">
                <Aside>
                    <img src={user.photo} alt={user.first_name} className='profilePic'></img>
                    <div>                        
                        <span><UserIcon className='icon'/>Usuario</span>
                        <p>{user.first_name} {user.last_name}</p>                        
                    </div>
                    <div>
                        <span><EmailIcon className='icon'/> Email</span>
                        <p>{user.email}</p>
                    </div>
                    
                    <p><BellIcon className='icon'/> Suscripciones</p>
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
