import React from 'react'
import styled from 'styled-components'

const GeneralBtn = styled.button`
    background          : var(--pure-white);
    border              : .1em solid var(--pure-black);
    border-radius       : 3em;
    color               : var(--pure-black);
    font-weight         : bold;
    margin              : .5em 0;
    padding             : .5em 2em;
    transition          : all .5s linear;
    &:hover {
        background      : linear-gradient(to right, var(--pure-black) , var(--default-primary));
        border-color    : var(--default-primary);
        color           : var(--pure-white);
    }
    &:active {
        background      : var(--default-primary);
        color           : var(--pure-black);
    }
`

const Button = () => {
    return (
        <GeneralBtn />
    )
}

export default Button
