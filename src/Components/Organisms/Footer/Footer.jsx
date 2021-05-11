import React from 'react'

import styled from 'styled-components'

const FooterBox = styled.footer`
    align-items     : center;
    border-top      : .09em solid var(--pure-white);
    background-color: var(--pure-black);
    color           : var(--pure-white);
    display         : flex;
    font-size       : 1.8em;
    justify-content : center;
    height          : 4em;
    margin-top      : 2em;
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
