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
`

export default Main
