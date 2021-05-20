import { createGlobalStyle } from 'styled-components'

// THEME CREATION

export const lightTheme = {
    // background          : 'linear-gradient(to right, #FE4918, #FFF8DC)',
    background: 'linear-gradient(to right, #ff1744, #ff1744)',
    fontColor: '#212121',

    // Color Palette - Light Theme
    colorPalette: {
        darkPrimary: '#c4001d',
        defaultPrimary: '#FFC107',
        lightPrimary: '#FFECB3',
        textPrimary: '#212121',
        accent: '#A67D02',
        primaryText: '#212121',
        secondaryText: '#757575',
        divider: '#BDBDBD',

        body: '#F2F2F2',

        h2: {
            fontColor: '#FFC107'
        },
    }
}

export const darkTheme = {
    background: 'linear-gradient(to right, #04C8D4, #512DA8)',
    fontColor: '#FFFFFF',

    // Color Palette - Dark Theme
    colorPalette: {
        darkPrimary: '#04C8D4',
        defaultPrimary: '#512DA8',
        lightPrimary: '#673AB7',
        textPrimary: '#FFFFFF',
        accent: '#E040FB',
        primaryText: '#212121',
        secondaryText: '#30363D',
        divider: '#BDBDBD',

        body: '#000000',

        h2: {
            fontColor: '#FFFFFF'
        },
    }
}

const GlobalStyle = createGlobalStyle`
    ${'' /* =================================================
    GLOBAL
    ===================================================== */}
    ${'' /* Color Palette Inheritance */}
    :root {
        --font-color        : ${props => props.theme.fontColor};
        --dark-primary      : ${props => props.theme.colorPalette.darkPrimary};
        --default-primary   : ${props => props.theme.colorPalette.defaultPrimary};
        --light-primary     : ${props => props.theme.colorPalette.lightPrimary};
        --text-primary      : ${props => props.theme.colorPalette.textPrimary};
        --accent            : ${props => props.theme.colorPalette.accent};
        --primary-text      : ${props => props.theme.colorPalette.primaryText};
        --secondary-text    : ${props => props.theme.colorPalette.secondaryText};
        --divider           : ${props => props.theme.colorPalette.divider};
        --pure-white        : #FFFFFF;
        --pure-black        : #000000;
    }


    ${'' /* Reset - Apply a natural box layout model to all elements, but allowing components to change */}
    html {
        box-sizing: border-box;
        font-size : 10px;
        padding   : 0;
        margin    : 0;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin                  : 0;
        font-family             : -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
                                  'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
                                  'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                                  'sans-serif';
        -webkit-font-smoothing  : antialiased;
        -moz-osx-font-smoothing : grayscale;
        background              : ${props => props.theme.colorPalette.body || '#FFFFFF'};
        margin                  : 0;
        padding                 : 0;
    }

    code {
        font-family : 'source-code-pro', 'Menlo', 'Monaco', 'Consolas',
                      'Courier New', 'monospace', 'Roboto';
    }

    ol, ul {
        list-style  : none;
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
        margin          : 0;
        padding         : 0;
        border          : 0;
        font-size       : 100%;
        font            : inherit;
        vertical-align  : baseline;
    }

    img {
        max-width       : 100%;
        height          : auto;
    }

    a {
        text-decoration : none;
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
        grid-column : 1 / 25;
        ${'' /* grid-row    : 10; */}
    }

    .nav-cristal {
        background      : transparent;
    }

    .nav-solid {
        ${'' /* background      : ${ props => props.theme.background || '#000000' }; */}
        background      : var(--pure-black);
    }

    #header {
        grid-column : 1 / 25;
        margin: 2em auto;
    }

    h1 {
        color       : ${props => props.theme.fontColor || '#393E46'};
        font-size   : 4em;
        margin: 0;
    }

    .carousel-root, .carousel, .carousel.carousel-slider {
        max-height  : calc(100vh - 40em) !important;
    }

    .carousel-root {
        width       : calc(100vw - 1.65em) !important;
    }

    .carousel {
        margin      : 0;
        max-width   : 100vw !important;
        padding     : 0;
    }

    .control-prev, .control-arrow, .control-next, .control-arrow {
        background      : var(--light-primary) !important;
        border-radius   : 3em !important;
        height          : 2em !important;
        margin          : auto .5em !important;
        opacity         : .2 !important;
        transition      : opacity .5s linear !important;
        width           : 2em !important;
    }

    .control-arrow-prev:hover, .control-arrow:hover {
        opacity         : 1 !important;
    }

    ul.control-dots {
        margin          : 2em auto;
    }

    .dot {
        background      : var(--dark-primary) !important;
        height          : 1.6em !important;
        margin          : 1em !important;
        transition      : opacity .5s linear !important;
        width           : 1.6em !important;
    }

    .animated, .selected {
        padding         : 0;
        margin          : 0 0 1em 0;
    }

    .thumbs-wrapper {
        margin          : 1em auto;
    }

    .thumbs > .thumb:hover {
        border          : .35em solid var(--dark-primary);
    }

    .carousel-status {
        visibility      : hidden;
    }

    span.slideTitle {
        position        : absolute;
        top             : 10%;
        right           : 5%;
        color           : var(--pure-white);
        font-size       : 10vw;
        text-shadow     : 3px 5px 8px var(--pure-black);
    }

    .category-slide{
        cursor: pointer;
    }

    #breadcrumb-home {
        grid-column : 1 / 25;
    }

    #breadcrumb {
        grid-column : 1 / 25;
        ${'' /* margin-top  : 7em; */}
    }


    ${'' /* =================================================
    SECTION 3
    ===================================================== */}
    #main {
        ${'' /* border: .2em solid blue; */}
        grid-column : 1 / 25;
        place-self  : center;
    }

    h2, .slideTitle {
        color       : var(--text-primary);
        font-size   : 3.5em;
        margin      : .3em 0 0 1em;
    }

    h3 {
        color       : var(--text-primary);
        font-size   : 3em;
    }

    label {
        font-size: 1.8em;
        color       : ${props => props.theme.fontColor || '#393E46'};
    }

    aside {
        ${'' /* border: .2em solid purple; */}
        grid-column : 1 / 4;

        align-self: left;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding: 2.2em 0;
        width: 20%;
    }

    section {
        ${'' /* border: .2em solid #AF0000; */}
        grid-column : 4 / 25;

        align-self: right;
        display         : flex;
        flex-direction  : column;
        margin: 0 auto;
        padding: .3em 6em;
        width           : 80%;
    }

    .popular-products {
        display         :flex;
        flex-direction  : row;
        flex-wrap       : wrap;
        justify-content :center;
        width           : 100%;
    }

    .filters {
        align-items     : center;
        display         : flex;
        justify-content : space-between;
    }

    .link {
        color               : #FFFFFF;
        font-size           : 1.4em;
        ${'' /* margin:             : auto 1.8em; */}
        padding             : .8em;
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

    .btn-sm {
        padding : .5em;
        width   : 5em;
    }

    .btn-md {
        width   : 10em;
    }

    .btn-lg {
        width   : 15em;
    }


    ${'' /* =================================================
    SECTION 4
    ===================================================== */}
    footer {
        grid-column : 1 / 25;
    }



    ${'' /* =================================================
    MEDIUM - CHECK TABLET HORIZONTAL VIEW 1024px
    ===================================================== */}
    @media(min-width: 992px) and (max-width: 1199px) {
        ${'' /* =============================================
        SECTION 3
        ================================================= */}
        aside {
            grid-column     : 1 / 2;
            width           : 10%;
        }

        section {
            grid-column     : 2 / 25;
            flex-direction  : block;
            width           : 90%;
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
            top             : 50%;
        }


        ${'' /* =============================================
        SECTION 3
        ================================================= */}
        aside, section, .filters {
            padding         : 2vw 3vw;
            width           : 100%;
        }

        aside, section {
            grid-column     : 1 / 25;
        }

        section {
            flex-direction  : block;
        }

        .filters {
            flex-direction  : column;
            justify-content : space-between;
        }
    }
`

export default GlobalStyle
