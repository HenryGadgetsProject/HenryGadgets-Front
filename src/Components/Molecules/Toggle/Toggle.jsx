import React from 'react'
import ToggleTheme from '../../Atoms/ToggleTheme'

import styled from 'styled-components'

const ToggleForm = styled.div`
    position: absolute;
    right   : .5em;
    top     : 7.2em;
    z-index : 100;
`

const Toggle = () => {
    return (
        <ToggleForm>
            <ToggleTheme />
        </ToggleForm>
    )
}

export default Toggle
