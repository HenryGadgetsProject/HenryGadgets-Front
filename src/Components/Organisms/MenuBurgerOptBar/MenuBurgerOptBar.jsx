import React, { useState } from 'react'
import MenuOptBar from '../MenuOptBar'

import styled from 'styled-components'

const StyledBurger = styled.div`
    display             : none;
    height              : 2.4em;
    position            : fixed;
    right               : 2.5em;
    top                 : 2.3em;
    width               : 2em;
    z-index             : 1000;

    div {
        background-color: ${ ({ open }) => open ? '#808080' : '#FFFFFF' };
        border-radius   : 2em;
        height          : .25em;
        transform-origin: .14em;
        transition      : all .5s linear;
        width           : 2.5em;

        &:nth-child(1) {
            transform   : ${ ({ open }) => open ? 'rotate(45deg)' : 'rotate(0)' };
        }

        &:nth-child(2) {
            opacity     : ${ ({ open }) => open ? 0 : 1 };
            transform   : ${ ({ open }) => open ? 'translateX(100%)' : 'translateX(0)' };
        }

        &:nth-child(3) {
            transform   : ${ ({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)' };
        }
    }

    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media (max-width: 992px) {
        display         : flex;
        flex-flow       : column nowrap;
        justify-content : space-around;
    }
`

const MenuBurgerOptBar = () => {
    const [ open, setOpen ] = useState(false)
    return (
        <>
            <StyledBurger
                onClick = { () => setOpen(!open) }
                open = { open }>
                <div />
                <div />
                <div />
            </StyledBurger>

            <MenuOptBar
                onClick = { () => setOpen(!open) }
                open = { open }>
            </MenuOptBar>
        </>
    )
}

export default MenuBurgerOptBar
