import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ToggleForm from '../../Molecules/Toggle'
import SearchBar from '../../Molecules/SearchBar'
import { useSelector, useDispatch } from 'react-redux'
import { userLogut } from '../../../Redux/Actions/User/UserActions'
import { clearCart, saveCartToDB, deleteCartFromDB } from '../../../Redux/Actions/Cart/CartActions'
import { resetWishList } from '../../../Redux/Actions/Wishlist/WishlistActions'

import styled from 'styled-components'

const Ul = styled.ul`
    display             : flex;
    flex-flow           : row nowrap;
    list-style          : none;
    margin              : auto 2em;

    li {
        padding         : 1.25em 0;
    }

    li > div {
        padding         : .4em .6em;
    }

    li > div, li > a {

        align-content   : center;
        align-items     : center;
        display         : flex;
        justify-content : center;


        transition      : all .3s linear;
        &:hover {
            border-bottom: .11em solid var(--dark-primary);
            transform   : scale(1.1);
            ${'' /* color       : lime; */}
        }
    }

    a > span {
        color           : var(--pure-white);
    }

    li > div.nav-search-bar {
        &:hover {
            border-bottom: none !important;
            transform   : none !important;
        }
    }

    ${'' /* #btn-active-search {
        &:checked ~ .top-search-bar {
            display: flex !important;
            transition: all .5s linear;
            width: 100%;
        }
    } */}

    ${'' /* .top-search-bar {
        display: none;
        width: 0;
    } */}

    svg {
        height          : 2.2em;
        margin-right    : .5em;
        width           : 2.2em;
    }

    img {
        border-radius   : 3em;
        height          : 2em;
        margin-right    : .5em;
        width           : 2em;
    }

    sub.badge {
        align-items     : center;
        background      : red;
        border-radius   : 100%;
        color           : white;
        display         : flex;
        font-size       : .8em;
        justify-content : center;
        ${'' /* padding         : .1em .4em; */}
        min-height      : 1.6em;
        min-width       : 1.6em;
    }

    .theme {
        font-size       : 1.4em;
    }


    ${'' /* =================================================
    MEDIUM - CHECK TABLET HORIZONTAL VIEW 1024px
    ===================================================== */}
    @media(min-width: 992px) and (max-width: 1199px) {
        span {
            display: none;
        }
    }


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media (max-width: 992px) {
        background-color: var(--pure-black);
        display         : flex;
        flex-flow       : column nowrap;
        ${'' /* height: 100vh; */}
        height          : 100%;
        overflow-y      : scroll;
        padding-top     : 3em;
        position        : fixed;
        right           : -2em;
        top             : 0;
        transform       : ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition      : all .3s linear;
        width           : 80%;
        z-index         : 900;
        &::-webkit-scrollbar {
            width: .2em;
        }
        &::-webkit-scrollbar-track {
            background: var(--pure-black);
        }
        &::-webkit-scrollbar-thumb {
            background-color: var(--pure-gray);
            border-radius: 2em;
            border: .3em solid (--pure-black);
        }

        li {
            align-self  : flex-start;
            color       : var(--pure-white);
            font-size   : 1.18em;
            padding     : 1em 0;
        }

        li > div {
            color: var(--pure-white);
            font-size: 1.2em;
            padding: .5em;
            transition      : all .3s linear;
            &:hover {
                transform   : scale(1.1);
                transform-origin: 0;
            }
        }

        li > div, li > a {
            &:hover {
                border-bottom: none !important;
            }
        }

        li > div.nav-search-bar {
            display: none;
        }
    }
`
const WishIconRed = styled.img`
    background: url('https://api.iconify.design/clarity:heart-solid.svg?color=red') no-repeat center center / contain;
    height: 1em !important;
    width: 1em !important;
    padding: 1em;
    transition: all .3s linear;
    &:hover {
        transform: scale(1.30);
    }`

// const Search = 'https://api.iconify.design/ic:baseline-search.svg?color=white'
const Branches = 'https://api.iconify.design/map-store.svg?color=white'
const AboutTeam = 'https://api.iconify.design/heroicons-solid:user-group.svg?color=white'
const LoginIcon = 'https://api.iconify.design/ri:login-box-line.svg?color=white'
const LogoutIcon = 'https://api.iconify.design/ri:logout-box-line.svg?color=white'
// const userIcon = 'https://api.iconify.design/carbon:user-avatar-filled.svg?color=white'
const UserIcon = 'https://api.iconify.design/clarity:assign-user-solid.svg?color=white'
const RegisterUserIcon = 'https://api.iconify.design/ant-design:user-add-outlined.svg?color=white'
const AdminIcon = 'https://api.iconify.design/clarity:administrator-solid.svg?color=white'
const WishIcon = 'https://api.iconify.design/clarity:heart-solid.svg?color=white'
const CartIcon = 'https://api.iconify.design/si-glyph:trolley-2.svg?color=white'

const MenuOptBar = ({ open }) => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.user)
    const itemCount = useSelector(state => state.cart.itemCount)
    const cart = useSelector(state => state.cart.cartList)

    const location = useLocation()

    // ********** Google Login **********
    const [googleUser, setGoogleUser] = useState(JSON.parse(localStorage.getItem('profile')))
    // console.log('User:', googleUser)
    useEffect(() => {
        const token = googleUser?.token
        // console.log('Token:', token)
        // JWT...
        setGoogleUser(JSON.parse(localStorage.getItem('profile')))
    }, [])
    // ********** Google Login **********

    const handleClick = () => {
        deleteCartFromDB(user.id)
        saveCartToDB(cart, user.id)
        dispatch(userLogut())
        dispatch(clearCart())
        dispatch(resetWishList())
        // ********** Google Log Out **********
        dispatch({ type: 'LOGOUT' })
        setGoogleUser(null)
        // ********** Google Log Out **********
    }

    return (
        <Ul open={open}>
            <li>
                <div className="nav-search-bar">
                    {location.pathname === '/home' ? <SearchBar /> : null}
                    {/* <input type="checkbox" id="btn-active-search" /> */}
                    {/* <div className="top-search-bar"> */}
                        {/* <SearchBar /> */}
                    {/* </div> */}
                    {/* <label htmlFor="btn-active-search" className="icon-active-search"><img src={Search} alt='search' />
                        <span>Buscar</span>
                    </label> */}
                </div>
            </li>
            {user.token ?
                user.is_admin ?
                    <>
                        <li>
                            <Link to="/branches" className="link">
                                <img src={Branches} alt='branches' />
                                <span>Sucursales</span>
                            </Link>
                        </li>
                        <li>
                            <Link to = "/about"  className="link">
                                <img src={AboutTeam} alt='about' />
                                <span>Acerca de</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/user' className="link">
                                <img src={(user.photo) ? user.photo : UserIcon} alt='user' />
                                <span>Hola {user.first_name}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" className="link" onClick={handleClick}>
                                <img src={LogoutIcon} alt='logout' />
                                <span>Salir</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin" className="link">
                                <img src={AdminIcon} alt='admin' />
                                <span>Panel</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/wishlist" className="link">
                                <img src={WishIcon} alt='wishlist' />
                                <span>Deseos</span>
                            </Link>
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <Link to="/branches" className="link">
                                <img src={Branches} alt='branches' />
                                <span>Sucursales</span>
                            </Link>
                        </li>
                        <li>
                            <Link to = "/about"  className="link">
                                <img src={AboutTeam} alt='about' />
                                <span>Acerca de</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/user' className="link">
                                <img src={(user.photo) ? user.photo : UserIcon} alt='user' />
                                <span className="regards">Hola {user.first_name}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" className="link" onClick={handleClick}>
                                <img src={LogoutIcon} alt='logout' />
                                <span>Salir</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/wishlist" className="link">
                                <img src={WishIcon} alt='wishlist' />
                                <span>Deseos</span>
                            </Link>
                        </li>

                    </>
                :
                <>
                    <li>
                        <Link to="/branches" className="link">
                            <img src={Branches} alt='branches' />
                            <span>Sucursales</span>
                        </Link>
                    </li>
                    <li>
                        <Link to = "/about"  className="link">
                            <img src={AboutTeam} alt='about' />
                            <span>Acerca de</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="link">
                            <img src={LoginIcon} alt='login' />
                            <span>Ingresar</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className="link">
                            <img src={RegisterUserIcon} alt='register' />
                            <span>Registrar</span>
                        </Link>
                    </li>

                </>
            }
            <li>
                <Link to="/cart" className="link">
                    <img src={CartIcon} alt='chart' />
                    <sub className="badge">{itemCount}</sub>
                </Link>
            </li>
            <li className="theme">
                <ToggleForm />
            </li>
        </Ul>
    )
}

export default MenuOptBar
