import styled from 'styled-components'

const FilterContainer = styled.div`
    ${'' /* border: 2px solid lime; */}
    display         : flex;
    flex-direction  : column;
    justify-self    : center;
    padding         : .5em 2em 0 0;
    width           : 30%;

    
    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        margin      : 0;
        padding     : 0;
        width       : 100%;
    }
`

export default FilterContainer
