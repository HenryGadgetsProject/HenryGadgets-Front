import styled from "styled-components"

const AdminSection = styled.section`
    background      : #424242;
    min-height      : 100%;
    ${'' /* height: 100vh; */}
    ${'' /* =================================================
    SMALL - CHECK TABLET OR MOBILE VIEW 768px
    ===================================================== */}
    @media(max-width: 768px) {
        margin      : 0;
        padding     : 0;
        width       : 100%;
    }
`

export default AdminSection
