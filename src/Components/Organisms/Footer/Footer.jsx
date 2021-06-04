import React from 'react'

import styled from 'styled-components'

const FooterBox = styled.footer`
    align-items     : center;
    ${'' /* border-top      : .09em solid var(--pure-white); */}
    background      : var(--pure-black);
    color           : var(--pure-white);
    display         : flex;
    font-size       : 1.8em;
    justify-content : center;
    height          : 4em;

    position        : fixed;
    left            : 0;
    bottom          : 0;
    width           : 100%;

    z-index         : 890;
`

const Footer = () => {
    return (
        <FooterBox className = "footer">
            <p>
                &copy; Copyright | Todos los derechos reservados.
            </p>
        </FooterBox>
    )
}

export default Footer
