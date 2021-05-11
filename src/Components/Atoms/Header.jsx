import styled from 'styled-components'

const Header = styled.header`
    background      : ${ props => props.theme.background || '#FFFFFF' };
    color           : ${ props => props.theme.fontColor || '#393E46' };
    display         : flex;
    flex-direction  : column;
    height          : 22em;
    padding         : 0 4em;
`

export default Header
