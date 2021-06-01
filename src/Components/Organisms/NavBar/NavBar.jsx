import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchBar from '../../Molecules/SearchBar'
import MenuBurgerOptBar from '../MenuBurgerOptBar'

import LogoLight from '../../../Images/Logo-light.png'
import LogoDark from '../../../Images/Logo-dark.png'

import styled from 'styled-components'
// import Logo from '../../../Images/Logo.png'

const Nav = styled.nav`
    ${'' /* background      : ${ props => props.theme.background || '#000000' }; */}
    background      : var(--pure-black);
    ${'' /* border-bottom   : .2em solid white; */}
    ${'' /* color           : ${ props => props.theme.fontColor || '#393E46' }; */}
    color           : var(--pure-white);
    display         : flex;
    height          : 7em;
    justify-content : space-between;
    padding         : 0 2em;
    ${'' /* position        : fixed; */}
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width           : 100%;
    z-index         : 900;

    ${'' /* .logo {
        padding     : 18px 0;
    } */}
`
const LogoDiv = styled.div`
    align-items     : center;
    display         : flex;
    justify-content : space-between;
    margin-left     : 2em;
    ${'' /* width           : auto; */}
    width           : 4em;
`

const NavBar = () => {
    const mode = useSelector((state) => state.global.theme)
    
    const location = useLocation()

    return (
        <Nav className="nav">
            <LogoDiv>
                <Link to="/home">
                    {
                        !mode ?
                            <img
                                id="logo-productman"
                                src={ LogoLight }
                                width="50"
                                height="50"
                                alt=""
                            />
                        :
                            <img
                                id="logo-productman"
                                src={ LogoDark }
                                width="50"
                                height="50"
                                alt=""
                            />
                    }
                </Link>
                {/* <H2>
                    <Link to="/home" className="link">
                        HandyX App
                    </Link>
                </H2> */}
            </LogoDiv>

            {location.pathname === '/home' ? <SearchBar /> : null}
            {/* <SearchBar /> */}

            <MenuBurgerOptBar />
        </Nav>
    )
}

export default NavBar
