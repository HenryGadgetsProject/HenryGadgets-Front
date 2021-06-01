import styled from 'styled-components'

const Breadcrumb = styled.div`
    background      : var(--background-gradient);
    color           : ${ props => props.theme.fontColor || '#393E46' };
    display         : flex;
    flex-direction  : row;
    height          : 5vh;
    justify-content : center;
    ${'' /* padding         : 0 3vw; */}
    position        : sticky;
    position        : -webkit-sticky;
    top             : 7em;
    width           : 100%;
    z-index         : 800;
`

export default Breadcrumb
