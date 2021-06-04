import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AsideSearchBar from '../AsideSearchBar'
import MenuBurgerOptBar from '../MenuBurgerOptBar'

import LogoLight from '../../../Images/Logo-light.png'
import LogoDark from '../../../Images/Logo-dark.png'

import styled from 'styled-components'
// import Logo from '../../../Images/Logo.png'

const NavHome = styled.nav`
    ${'' /* border-bottom   : .2em solid blue; */}
    ${'' /* //align-items     : center; */}
    ${'' /* color           : ${ props => props.theme.fontColor || '#393E46' }; */}
    color           : var(--pure-white);
    display         : flex;
    height          : 7em;
    justify-content : space-between;
    padding         : 0 2em;
    position        : fixed;
    width           : 100%;
    z-index         : 900;

    div.aside-search-bar {
            display: none;
        }

    
    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        div.aside-search-bar {
            align-items     : center;
            display         : flex !important;
            justify-content : center;
            ${'' /* position: absolute; */}
            width           : 100%;
        }
    }
`
const LogoDivHome = styled.div`
    align-items     : center;
    display         : flex;
    justify-content : space-between;
    margin-left     : 2em;
    width           : 4em;

    transition      : all .3s linear;
    &:hover {
        transform   : scale(1.1);
    }
`

const NavBarHome = () => {
    const [navHomeState, setNavHomeState] = useState(false)
    const mode = useSelector((state) => state.global.theme)

    // const location = useLocation()

    useEffect(() => {
        const changeNavHomeBackground = () => {
            if (window.scrollY >= 100) {
                setNavHomeState(true)
            } else {
                setNavHomeState(false)
            }
        }
        window.addEventListener('scroll', changeNavHomeBackground)
        return () => {
            window.removeEventListener('scroll', changeNavHomeBackground);
        }
    }, [])


    return (
        <NavHome className={navHomeState ? "nav-solid" : "nav-cristal"}>
            <LogoDivHome>
                <Link to="/home">
                    {
                        !mode ?
                            <img
                                id="logo"
                                src={LogoLight}
                                width="50"
                                height="50"
                                alt=""
                            />
                            :
                            <img
                                id="logo"
                                src={LogoDark}
                                width="50"
                                height="50"
                                alt=""
                            />
                    }
                    {/* <h1>Henry Gadgets</h1> */}
                </Link>
            </LogoDivHome>

            <div className="aside-search-bar">
                <AsideSearchBar />
            </div>

            <MenuBurgerOptBar />
        </NavHome>
    )
}

export default NavBarHome
