import styled from 'styled-components'

const Breadcrumb = styled.div`
    background      : ${ props => props.theme.background || '#FFFFFF' };
    color           : ${ props => props.theme.fontColor || '#393E46' };
    display         : flex;
    flex-direction  : row;
    height          : 7.5vh;
    justify-content : center;
    padding         : 0 3vw;
    position        : -webkit-sticky;
    position        : sticky;
    top             : 7em;
    width           : 100%;
    z-index         : 800;
`

export default Breadcrumb
