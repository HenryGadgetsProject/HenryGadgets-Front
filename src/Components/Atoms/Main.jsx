import styled from 'styled-components'

const Main = styled.main`
    display         : flex;
    flex-direction  : row;
    flex-wrap       : wrap;
    justify-content : center;
    margin          : 0 auto 7em;
    ${'' /* min-height      : calc(100vh - 20em); */}
    ${'' /* max-height      : 100%; */}
    min-height      : calc(100vh - 20em);
    width           : 100%;
    ${'' /* =================================================
    SMALL - CHECK TABLET OR MOBILE VIEW 768px
    ===================================================== */}
    ${'' /* @media(max-width: 768px) { */}
        ${'' /* padding     : 4em .5em; */}
        ${'' /* width       : 100%; */}
    ${'' /* } */}
`

export default Main
