import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchBar from '../../Molecules/SearchBar'
import MenuBurgerOptBar from '../MenuBurgerOptBar'

import LogoLight from '../../../Images/Logo-light.png'
import LogoDark from '../../../Images/Logo-dark.png'

import styled from 'styled-components'
// import Logo from '../../../Images/Logo.png'

const NavHome = styled.nav`
    ${'' /* border-bottom   : .2em solid blue; */}
    ${'' /* color           : ${ props => props.theme.fontColor || '#393E46' }; */}
    color           : var(--pure-white);
    display         : flex;
    height          : 7em;
    justify-content : space-between;
    padding         : 0 2em;
    position        : fixed;
    width           : 100%;
    z-index         : 900;

    ${'' /* .logo {
        padding     : 18px 0;
    } */}
`
const LogoDivHome = styled.div`
    align-items     : center;
    display         : flex;
    justify-content : space-between;
    margin-left     : 2em;
    width           : auto;
`

const NavBarHome = () => {
    const [navHomeState, setNavHomeState] = useState(false)
    const mode = useSelector((state) => state.global.theme)

    const location = useLocation()

    // const changeNavHomeBackground = () => {
    //     if (window.scrollY >= 100) {
    //         setNavHomeState(true)
    //     } else {
    //         setNavHomeState(false)
    //     }
    // }

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

    // useEffect(()=>{
    //     window.addEventListener('scroll', changeNavHomeBackground)
    //     return
    // })

    // // console.log(location)
    // if (location.pathname === '/home') {
    //     window.addEventListener('scroll', changeNavHomeBackground)
    // } else {
    //     window.removeEventListener('scroll', changeNavHomeBackground);
    // }

    return (
        <NavHome className={navHomeState ? "nav-solid" : "nav-cristal"}>
            <LogoDivHome>
                <Link to="/home">
                    {
                        !mode ?
                            <img
                                id="logo-productman"
                                src={LogoLight}
                                width="50"
                                height="50"
                                alt=""
                            />
                            :
                            <img
                                id="logo-productman"
                                src={LogoDark}
                                width="50"
                                height="50"
                                alt=""
                            />
                    }
                    {/* <h1>Henry Gadgets</h1> */}
                </Link>
                {/* <H2>
                    <Link to="/home" className="link">
                        HandyX App
                    </Link>
                </H2> */}
            </LogoDivHome>

            {location.pathname === '/home' ? <SearchBar /> : null}
            {/* <SearchBar /> */}

            <MenuBurgerOptBar />
        </NavHome>
    )
}

export default NavBarHome
