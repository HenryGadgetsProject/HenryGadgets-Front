import styled from "styled-components"

const AdminSection = styled.section`
    ${'' /* background      : #424242; */}
    background      : var(--body);
    min-height      : 100%;

    
    ${'' /* =================================================
    MEDIUM - CHECK TABLET HORIZONTAL VIEW 1024px
    ===================================================== */}
    @media(min-width: 992px) and (max-width: 1199px) {
        grid-column         : 2 / 25;
        flex-direction      : block;
        width               : 90%;
    }


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        margin      : 0;
        padding     : 0;
        width       : 100%;
    }
`

export default AdminSection
