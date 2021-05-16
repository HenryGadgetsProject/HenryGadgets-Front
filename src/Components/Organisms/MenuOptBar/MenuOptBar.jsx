import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Ul = styled.ul`
    display             : flex;
    flex-flow           : row nowrap;
    list-style          : none;
    margin              : auto 2em;

    li {
        ${'' /* font-size       : 1.4em; */}
        ${'' /* color           : var(--font-color); */}
        padding         : 1.25em 0;
    }

    @media (max-width: 768px) {
        background-color: #0D2538;
        flex-flow       : column nowrap;
        ${'' /* height: 100vh; */}
        height          : 100%;
        padding-top     : 5em;
        position        : fixed;
        right           : -2em;
        top             : 0;
        transform       : ${ ({ open }) => open ? 'translateX(0)' : 'translateX(100%)' };
        transition      : all .5s linear;
        width           : 300px;

        li {
            color       : var(--pure-white);
            font-size   : 1.18em;
            margin      : 0 2em .5em 4em;
        }
    }
`

const Img = styled.img`
    width: 2em;
    height: 2em;
    transition: 0.5s;
    &:hover {
        transform: scale(1.30)
    }
`

const adminIcon = 'https://api.iconify.design/clarity:administrator-solid.svg?color=white'
const chartIcon = 'https://api.iconify.design/si-glyph:trolley-2.svg?color=white'

const MenuOptBar = ({ open }) => {
    return (
        <Ul open = { open }>
            <li>
                <Link to = "/MyChart"  className="link">
                    <Img src={chartIcon} alt='chart'></Img>
                </Link>
            </li>
            <li>
                <Link to = "/admin"  className="link">
                    <Img src={adminIcon} alt='admin'></Img>
                </Link>
            </li>
            {/* <li>
                <Link to = "/about"  className = "link">
                    Acerca de
                </Link>
            </li> */}
            {/* <li>Contact Us</li>
            <li>Sign In</li>
            <li>Sign Up</li> */}
        </Ul>
    )
}

export default MenuOptBar
