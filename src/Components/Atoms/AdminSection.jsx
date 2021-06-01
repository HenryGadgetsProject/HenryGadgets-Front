import styled from "styled-components"

const AdminSection = styled.section`
    ${'' /* background      : #424242; */}
    background      : var(--body);
    min-height      : 100%;

    
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
