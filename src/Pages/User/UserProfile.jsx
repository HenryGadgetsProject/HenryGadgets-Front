import React from 'react'
import { Route, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from '../../Components/Organisms/NavBar'
import Breadcrumb from '../../Components/Atoms/Breadcrumb'
// import Header from '../../Components/Atoms/Header'
import Main from '../../Components/Atoms/Main'
import UserOrders from '../../Components/Organisms/UserOrders'
import ReviewsForm from '../../Components/Organisms/ReviewsForm'
import AllReviews from '../../Components/Organisms/AllReviews'
import UserEditReviewForm from '../../Components/Organisms/UserEditReviewForm'
import UserWishlist from '../../Components/Organisms/UserWishlist'
import Footer from '../../Components/Organisms/Footer'
// import Table from '../../Components/Atoms/Table'

import styled from 'styled-components'

const Aside = styled.aside`
    display             : flex;
    flex-direction      : column;
    /* align-items         : center; */
    background          : var(--aside-home);
    border              : none;
    padding             : 2em;

    .profilePic {
        border-radius   : 50%;
        height          : 16em;
        width           : 16em;
    }

    div, a {
        align-items     : center;
        align-self      : flex-start;
        display         : flex;
        flex-direction  : row;
        ${'' /* flex-wrap       : wrap; */}
        justify-content : flex-start;
        margin          : .5em 0 0 0;
        padding         : 1em;
    }

    .links {
        transition      : transform .3s linear;
        &:hover {
            transform   : scale(1.08)
        }
    }

    img {        
        border          : none;
        margin          : 0 auto;
        outline         : none;
        padding         : 1em;
    }

    ${'' /* .icon {
        border-radius   : 0;
        height          : 2em;
        width           : 2em;
    } */}

    span {
        ${'' /* display         : flex;
        justify-content : center; */}
        color           : var(--font-color);
        font-size       : 2em;
        margin-left: .8em;
    }

    p {
        align-self      : flex-start;
        color           : var(--font-color);
        flex-wrap       : wrap;
        font-size       : 2em;
        ${'' /* margin          : 0 auto 1.5em; */}
        margin          : 0 0 1em .5em;
    }

    ${'' /* =================================================
    MEDIUM - CHECK TABLET HORIZONTAL VIEW 1024px
    ===================================================== */}
    @media(min-width: 992px) and (max-width: 1199px) {
        grid-column     : 1 / 25;
        width: 100%;

        ${'' /* img {
            margin      : 1em auto;
        } */}

        ${'' /* span {
            display     : none;
        } */}
    }

    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        display: flex !important;
        position: static !important;
        position            : -webkit-static !important;
        z-index             : 0;
    }
`
const UserSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    background: var(--body);

    table {
        font-size: 1.2em;
        margin: 0 auto;
    }
`
const UserIcon = styled.img`
    background: var(--icon-user) no-repeat center center / contain;
`
const EmailIcon = styled.img`
    background: var(--icon-email) no-repeat center center / contain;
`
const BellIcon = styled.img`
    background: var(--icon-bell) no-repeat center center / contain;
`
const OrderIcon = styled.img`
    background: var(--icon-order) no-repeat center center / contain;
`
const Review = styled.img`
    background: var(--icon-review) no-repeat center center / contain;
`
const WishIcon = styled.img`
    background: var(--icon-wish) no-repeat center center / contain;
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
                        <UserIcon className='icon'/>
                        <span>Usuario</span>
                    </div>
                    <p>{user.first_name} {user.last_name}</p>

                    <div>
                        <EmailIcon className='icon'/>
                        <span>Email</span>
                    </div>
                    <p>{user.email}</p>
                    
                    <div className="links">
                        <BellIcon className='icon'/>
                        <span>Suscripciones</span>
                        <button>Suscribirse</button>
                    </div>

                    <Link to='/user/orders' className="links">
                        <OrderIcon className='icon'/>
                        <span>Ordenes</span>
                    </Link>

                    <Link to='/user/reviews' className="links">
                        <Review className='icon'/>
                        <span>Reviews</span>
                    </Link>

                    <Link to='/user/wishlist' className="links">
                        <WishIcon className='icon'/>
                        <span>Lista de deseos</span>
                    </Link>
                </Aside>

                <UserSection>
                    <Route exact path={['/user', '/user/orders']} render={() => <UserOrders />} />
                    <Route exact path='/user/review' render={() => <ReviewsForm />} />
                    <Route exact path='/user/reviews' render={() => <AllReviews />} />
                    <Route exact path='/user/edit-review' render={() => <UserEditReviewForm />} />
                    <Route exact path='/user/wishlist' render={() => <UserWishlist />} />
                </UserSection>
            </Main>

            <Footer />

        </div>
    )
}

export default UserProfile
