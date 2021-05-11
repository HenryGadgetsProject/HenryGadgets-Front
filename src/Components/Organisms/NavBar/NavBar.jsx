import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../Molecules/SearchBar'
import MenuBurgerOptBar from '../MenuBurgerOptBar'

import styled from 'styled-components'
import Logo from '../../../Images/Logo.png'

const Nav = styled.nav`
    ${'' /* background      : ${ props => props.theme.background || '#000000' }; */}
    background      : var(--pure-black);
    ${'' /* border-bottom   : .2em solid #F1F1F1; */}
    ${'' /* color           : ${ props => props.theme.fontColor || '#393E46' }; */}
    color           : var(--pure-white);
    display         : flex;
    height          : 7em;
    justify-content : space-between;
    padding         : 0 2em;
    position        : fixed;
    width           : 100%;
    z-index         : 1000;

    ${'' /* .logo {
        padding     : 18px 0;
    } */}
`
const LogoDiv = styled.div`
    align-items     : center;
    display         : flex;
    justify-content : space-between;
    margin-left     : 2em;
    width           : auto;
`

// const H2 = styled.h2`
//     font-size       : 1.4em;
//     margin-left     : .5em;
// `

const NavBar = () => {
    return (
        <Nav className="nav">
            <LogoDiv>
                <Link to="/home">
                    <img
                        id="logo-handyman"
                        src={Logo}
                        width="50"
                        height="50"
                        alt=""
                    />
                </Link>
                {/* <H2>
                    <Link to="/home" className="link">
                        HandyX App
                    </Link>
                </H2> */}
            </LogoDiv>

            <SearchBar />

            <MenuBurgerOptBar />
        </Nav>
    )
}

export default NavBar
