import styled from 'styled-components'

const FilterContainer = styled.div`
    ${'' /* border: 2px solid lime; */}
    display         : flex;
    flex-direction  : column;
    justify-self    : center;
    margin          : .5em;
    padding         : .5em;
    width           : 100%;


    ${'' /* =================================================
    MEDIUM - CHECK TABLET HORIZONTAL VIEW 1024px
    ===================================================== */}
    @media(min-width: 992px) and (max-width: 1199px) {
        ${'' /* margin         : .5em; */}
        width           : 50%;
    }

    
    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        margin      : 0;
        padding     : 0;
        width       : 80%;
    }
`

export default FilterContainer
