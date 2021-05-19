import styled from 'styled-components'

const FilterContainer = styled.div`
    display         : flex;
    flex-direction  : column;
    justify-self    : center;
    margin-left     : 3em;
    padding         : .5em;
    width           : 60%;
    ${'' /* =================================================
    SMALL - CHECK TABLET OR MOBILE VIEW 768px
    ===================================================== */}
    @media(max-width: 768px) {
        margin      : 0;
        padding     : 0;
        width       : 100%;
    }
`

export default FilterContainer
