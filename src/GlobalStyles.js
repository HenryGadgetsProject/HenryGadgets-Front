import { createGlobalStyle } from 'styled-components'

// THEME CREATION

export const lightTheme = {
    background                  : 'linear-gradient(to right, #FF1744 , #AF0000)',
    fontColor                   : '#000000',

    // Color Palette - Light Theme
    colorPalette: {
        darkPrimary             : '#AF0000',
        defaultPrimary          : '#FF1744',
        lightPrimary            : '#FFCDD2',
        primaryAccent           : '#FFCC00',
        secondaryAccent         : '#00FFFF',
        primaryText             : '#212121',
        secondaryText           : '#757575',
        divider                 : '#BDBDBD',
        body                    : '#F2F2F2',
        h2: {
            fontColor           : '#D32F2F'
        },
    }
}

export const darkTheme = {
    background                  : 'linear-gradient(to right, #04C8D4 , #512DA8)',
    fontColor                   : '#FFFFFF',

    // Color Palette - Dark Theme
    colorPalette: {
        darkPrimary             : '#512DA8',
        defaultPrimary          : '#4202C2',
        lightPrimary            : '#815FD3',
        primaryAccent           : '#00FF00',
        secondaryAccent         : '#E040FB',
        primaryText             : '#F2F2F2',
        secondaryText           : '#30363D',
        divider                 : '#BDBDBD',
        body                    : '#212121',
        h2: {
            fontColor           : '#4F0EA6'
        },
    }
}

const GlobalStyle = createGlobalStyle`
    ${'' /* =================================================
    GLOBAL
    ===================================================== */}
    ${'' /* Color Palette Inheritance */}
    :root {
        --background-gradient   : ${ props => props.theme.background };
        --font-color            : ${ props => props.theme.fontColor };
        --dark-primary          : ${ props => props.theme.colorPalette.darkPrimary };
        --default-primary       : ${ props => props.theme.colorPalette.defaultPrimary };
        --light-primary         : ${ props => props.theme.colorPalette.lightPrimary };
        --primary-accent        : ${ props => props.theme.colorPalette.primaryAccent };
        --secondary-accent      : ${ props => props.theme.colorPalette.secondaryAccent };
        --primary-text          : ${ props => props.theme.colorPalette.primaryText };
        --secondary-text        : ${ props => props.theme.colorPalette.secondaryText };
        --divider               : ${ props => props.theme.colorPalette.divider };
        --body                  : ${ props => props.theme.colorPalette.body };
        --pure-white            : #FFFFFF;
        --pure-black            : #000000;
    }


    ${'' /* Reset - Apply a natural box layout model to all elements, but allowing components to change */}
    html {
        box-sizing              : border-box;
        font-size               : 10px;
        padding                 : 0;
        margin                  : 0;
    }

    *, *:before, *:after {
        box-sizing              : inherit;
    }

    body {
        margin                  : 0;
        font-family             : -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
                                  'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
                                  'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                                  'sans-serif';
        -webkit-font-smoothing  : antialiased;
        -moz-osx-font-smoothing : grayscale;
        ${'' /* background              : ${props => props.theme.colorPalette.body || '#FFFFFF'}; */}
        background              : var(--body);
        margin                  : 0;
        padding                 : 0;
    }

    code {
        font-family             : 'source-code-pro', 'Menlo', 'Monaco', 'Consolas',
                                  'Courier New', 'monospace', 'Roboto';
    }

    ol, ul {
        list-style              : none;
    }

    html, body, div,
    span, header, iframe,
    h1, h2, h3,
    h4, h5, h6,
    p, a, aside,
    section, footer,
    ${'' /* pre, abbr, address, big,
    cite, code, del, dfn, em, img, ins,
    kbd, q, s, samp, small, strong, sub,
    sup, var, b, u, i, dl, dt, dd, ol,
    ul, li, fieldset, form, label,
    legend, table, caption, tbody,
    tfoot, thead, tr, th, td, article,
    canvas, details, embed, figure, figcaption,
    hgroup, menu, output, ruby, summary,
    time, mark, audio, video */}
     {
        margin                  : 0;
        padding                 : 0;
        border                  : 0;
        font-size               : 100%;
        font                    : inherit;
        vertical-align          : baseline;
    }

    img {
        max-width               : 100%;
        height                  : auto;
    }

    a {
        text-decoration         : none;
    }


    ${'' /* Initial Layout */}
    .container {
        ${'' /* border: .2em solid lime; */}
        display                 : grid;
        grid-template-columns   : repeat(24, auto);
        /* grid-auto-rows          : minmax(3.5em, auto);
        grid-gap                : 0.2em; */

        ${'' /* min-height: 0;
        min-width: 0;
        overflow: hidden; */}
    }


    ${'' /* =================================================
    SECTION 1 / SECTION 2
    ===================================================== */}
    nav {
        grid-column             : 1 / 25;
        ${'' /* grid-row    : 10; */}
    }

    .nav-cristal {
        background              : transparent;
    }

    .nav-solid {
        ${'' /* background      : var(--background-gradient); */}
        background              : var(--pure-black);
    }

    #header {
        grid-column             : 1 / 25;
        margin                  : 2em auto;
    }

    h1 {
        ${'' /* color       : ${props => props.theme.fontColor || '#393E46'}; */}
        color                   : var(--font-color);
        font-size               : 4em;
        margin                  : 0;
    }

    .carousel-root, .carousel, .carousel.carousel-slider {
        max-height              : calc(100vh - 40em) !important;
    }

    .carousel-root {
        ${'' /* width       : calc(100vw - 1.65em) !important; */}
        width                   : 100vw !important;
    }

    .carousel {
        margin                  : 0;
        max-width               : 100vw !important;
        padding                 : 0;
    }

    .control-prev, .control-arrow, .control-next, .control-arrow {
        background              : var(--default-primary) !important;
        border-radius           : 3em !important;
        height                  : 2em !important;
        margin                  : auto .5em !important;
        opacity                 : .2 !important;
        transition              : opacity .5s linear !important;
        width                   : 2em !important;
    }

    .control-arrow-prev:hover, .control-arrow:hover {
        opacity                 : 1 !important;
    }

    ul.control-dots {
        margin                  : 2em auto;
    }

    .dot {
        background              : var(--dark-primary) !important;
        height                  : 1.6em !important;
        margin                  : 1em !important;
        transition              : opacity .5s linear !important;
        width                   : 1.6em !important;
    }

    .animated, .selected {
        padding                 : 0;
        margin                  : 0 0 1em 0;
    }

    .thumbs-wrapper {
        margin                  : 1em auto;
    }

    .thumbs > .thumb:hover {
        border                  : .35em solid var(--dark-primary);
    }

    .carousel-status {
        visibility              : hidden;
    }

    span.slideTitle {
        position                : absolute;
        top                     : 10%;
        right                   : 5%;
        color                   : var(--pure-white);
        font-size               : 10em;
        text-shadow             : 3px 5px 8px var(--pure-black);
    }

    .category-slide{
        cursor                  : pointer;
    }

    #breadcrumb-home {
        grid-column             : 1 / 25;
    }

    #breadcrumb {
        grid-column             : 1 / 25;
        ${'' /* margin-top  : 7em; */}
    }


    ${'' /* =================================================
    SECTION 3
    ===================================================== */}
    #main {
        ${'' /* border: .2em solid #AF0000; */}
        grid-column             : 1 / 25;
        place-self              : center;
    }

    h2, .slideTitle {
        color                   : var(--primary-text);
        font-size               : 3.5em;
        margin                  : .3em 0 0 1em;
    }

    h3 {
        color                   : var(--primary-text);
        font-size               : 3em;
    }

    label {
        font-size               : 1.8em;
        color                   : var(--font-color);
    }

    aside {
        ${'' /* border: .2em solid cyan; */}
        grid-column             : 1 / 4;

        align-items             : center;
        align-self              : left;
        box-sizing              : border-box;
        display                 : flex;
        flex-direction          : column;
        margin                  : 0 auto;
        min-height              : 100%;
        outline                 : none;
        padding                 : 2.2em 0;
        width                   : 20%;
    }

    section {
        ${'' /* border: .2em solid blue; */}
        grid-column             : 4 / 25;

        align-self              : right;
        display                 : flex;
        flex-direction          : column;
        margin                  : 0 auto;
        padding                 : .3em 6em;
        width                   : 80%;
        align-items             : center;
    }

    .card-container {
        ${'' /* border: 2px solid red; */}
        margin                  : 1.8em;
        padding                 : 0;
    }

    .popular-products {
        display                 : flex;
        flex-direction          : row;
        flex-wrap               : wrap;
        justify-content         : center;
        width                   : 100%;
    }

    .filters-org {
        align-items             : center;
        display                 : flex;
        flex-wrap               : wrap;
        justify-content         : space-between;
        ${'' /* width: 100%; */}
    }

    .filters {
        align-items             : center;
        display                 : flex;
        flex-direction          : column;
        ${'' /* width: 100%; */}

        h6 {
            color               : var(--font-color);
            font-size           : 1.8em;
            margin              : 0 auto .5em;
        }

        label {
            color               : var(--font-color);
        }
    }

    .link {
        color                   : #FFFFFF;
        font-size               : 1.4em;
        ${'' /* margin:             : auto 1.8em; */}
        padding                 : .8em;
        &:hover {
            /* border          : .1em solid var(--accent); */
            ${'' /* background      : var(--accent); */}
            /* background-image: radial-gradient(rgba(0, 0, 0, 1) 55%, var(--accent)); */
            /* border-radius   : 3em; */
            /* box-shadow      : 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
        }
        &:active {
            /* background      : var(--light-primary);
            color           : #000000;
            font-weight     : bold; */
        }
    }

    .btn {
        background              : var(--pure-white);
        border                  : .1em solid var(--dark-primary);
        border-radius           : 3em;
        color                   : var(--dark-primary);
        margin                  : 2em auto;
        outline                 : none;
        transition-duration     : .5s;
        &:hover {
            ${'' /* background      : linear-gradient(to right, var(--default-primary) , var(--dark-primary)); */}
            background          : var(--background-gradient);
            border-color        : var(--dark-primary);
            color               : var(--pure-white);
            transform           : scale(1.10);
        }
        &:active {
            ${'' /* background      : linear-gradient(to right, var(--default-primary) , #000000); */}
            color               : var(--pure-white);
            font-weight         : bold;
        }
    }

    .btn-pag {
        background              : var(--pure-white);
        ${'' /* border              : .1em solid var(--dark-primary); */}
        border                  : .1em solid var(--divider);
        color                   : var(--dark-primary);
        cursor                  : pointer;
        font-size               : 1.2em;
        ${'' /* margin              : 2em auto; */}
        outline                 : none;
        padding                 : 1.6em;
        text-align              : center;
        transition-duration     : .5s;
        &:hover {
            ${'' /* background      : linear-gradient(to right, var(--default-primary) , var(--dark-primary)); */}
            background          : var(--background-gradient);
            border-color        : var(--dark-primary);
            color               : var(--pure-white);
            ${'' /* transform       : scale(1.10); */}
        }
        &:focus {
            outline             : none;
        }
        &:active {
            background-color    : var(--light-primary);
            color               : var(--pure-white);
            font-weight         : bold;
        }
    }

    .active {
        background              : var(--light-primary);
        color                   : black;
        font-weight             : bold;
    }

    .btn-sm {
        padding                 : .5em;
        width                   : 5em;
    }

    .btn-md {
        height                  : 3.5em;
        margin                  : 2em auto;
        width                   : 13em;

        ${'' /* width   : 10em;
        height: 6em; */}
    }

    .btn-lg {
        width                   : 15em;
    }


    ${'' /* =================================================
    SECTION 4
    ===================================================== */}
    footer {
        grid-column             : 1 / 25;
    }

    .container-confirmation{
        display                 :flex;
        flex-direction          : column;
    }

    .line{
        display                 : flex;
        justify-content         : space-around;
        padding                 : 1em;
        font-size               : 2em;
    }

    .total{
        display                 : flex;
        justify-content         : flex-end;    
        font-size               : 2em;
    }


    ${'' /* =================================================
    SECTION BUYSUCCESS
    ===================================================== */}

    .success-container{
        display: flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center
    }

    .success-cart{
        padding:2rem;
        /* border:1px solid #000000;
        border-radius:2.5rem */
    }
    .success-product{
        display: flex;
        justify-content:flex-start;        
        border-bottom:1px dotted #000000;
        padding: 2rem;
        font-size:1.6rem;
    }

    .success-product div{
        margin-right:2.5rem;
    }

    .product-name{
        width:200px;
    }

    .product-quantity{
        width:20px;
    }

    .product-price{
        width:50px;
        text-align: right;
    }
    .product-total{
        width:50px;
        text-align: right;
    }

    .success-total{
        width:100%;
        padding:2rem;
        font-size:1.6rem;
        text-align: right;
        padding-right: 4.5rem;
    }

    .success-payment{
        display: flex;
        flex-direction: column;
        align-items :flex-start ;
        border-top:1px dotted #000000;       
        border-bottom:1px dotted #000000;
        padding: 2rem;
        font-size:1.6rem;
    }

    .mail{
        margin-top:2rem;
    }

    .mail button{
        background-color:red;
        padding:1rem 2rem;
        border-color:var(--pure-white);
    }

    .filtered-buttons{
        display: flex;
        justify-content: center;
        margin-top:3rem;
        
    }

    .filter-buttons img{
        width:5rem;
        height:5rem;
        margin:3rem;
    }



    ${'' /* =================================================
    MEDIUM - CHECK TABLET HORIZONTAL VIEW 1024px
    ===================================================== */}
    @media(min-width: 992px) and (max-width: 1199px) {
        ${'' /* =============================================
        SECTION 3
        ================================================= */}
        aside {
            grid-column         : 1 / 2;
            width               : 10%;
        }

        section {
            grid-column         : 2 / 25;
            flex-direction      : block;
            width               : 90%;
        }

        .filters {
            width               : 160%;
        }

        .btn {
            margin              : 2em 0 2em 6em;
        }

        .btn-md {
            width               : 10em;
            height              : 3em;
        }
    }



    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        ${'' /* =============================================
        SECTION 1 / SECTION 2
        ================================================= */}
        span.slideTitle {
            top                 : 50%;
            font-size           : 5em;
        }


        ${'' /* =============================================
        SECTION 3
        ================================================= */}
        aside, section, .filters {
            padding             : 2vw;
            width               : 100%;
        }

        aside, section {
            grid-column         : 1 / 25;
        }

        section {
            flex-direction      : block;
        }

        .filters {
            flex-direction      : column;
            justify-content     : space-between;
        }

        .btn-md {
            margin              : 1em auto;
            width               : 14em;
        }
    }
`

export default GlobalStyle
