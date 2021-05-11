import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toogleTheme } from '../../Redux/Actions/Global/GlobalActions'

import styled from 'styled-components'

const InputCheckbox = styled.input`
    ${'' /* Base button */}
    margin              : 1em;
    position            : relative;
    width               : 4.5em;
    height              : 2.5em;
    -webkit-appearance  : none;
    background          : linear-gradient(0deg, #333333, #000000);
    outline             : none;
    border-radius       : 2em;
    box-shadow          : 0 0 0 .1em #353535, 0 0 0 .2em #3E3E3E, inset 0 0 1em rgba(0,0,0,1);
    &:checked:nth-of-type(1) {
        background      : linear-gradient(0deg, #70A1FF, #1E90FF);
        box-shadow      : 0 0 0 .1em #353535, 0 0 0 .2em #3E3E3E, inset 0 0 1em rgba(0,0,0,1);
    }

    ${'' /* Button */}
    &:before {
        content         : '';
        position        : absolute;
        top             : 0;
        left            : 0;
        width           : 2.5em;
        height          : 2.5em;
        background      : linear-gradient(0deg, #000000, #6B6B6B);
        border-radius   : 2em;
        box-shadow      : 0 0 0 .1em #232323;
        transform       : scale(.98,.96);
        transition      : .5s;
    }
    &:checked:before {
        left            : 2em;
    }

    ${'' /* Point button */}
    &:after{
        content         : '';
        position        : absolute;
        top             : calc(50% - 2px);
        left            : 2em;
        width           : .4em;
        height          : .4em;
        background      : linear-gradient(0deg, #6B6B6B, #000000);
        border-radius   : 50%;
        transition      : .5s;
    }
    &:checked:after {
        left            : 4em;
    }
`

const ToggleTheme = () => {
    const dispatch = useDispatch()

    const mode = useSelector((state) => state.global.theme)

    return (
        <InputCheckbox
            name=""
            checked = { mode }
            onChange = { () => dispatch(toogleTheme(!mode)) }
            type="checkbox"
        />
    )
}

export default ToggleTheme
