import { createGlobalStyle } from 'styled-components'

// THEME CREATION

export const lightTheme = {
    // background          : 'linear-gradient(to right, #FE4918, #FFF8DC)',
    background          : 'linear-gradient(to right, #FFA000, #FFF8DC)',
    fontColor           : '#212121',

    // Color Palette - Light Theme
    colorPalette        : {
        darkPrimary     : '#FFA000',
        defaultPrimary  : '#FFC107',
        lightPrimary    : '#FFECB3',
        textPrimary     : '#212121',
        accent          : '#A67D02',
        primaryText     : '#212121',
        secondaryText   : '#757575',
        divider         : '#BDBDBD',

        body            : '#F2F2F2',

        h2: {
            fontColor   : '#FFC107'
        },
    }
}

export const darkTheme = {
    background          : 'linear-gradient(to right, #04C8D4, #512DA8)',
    fontColor           : '#FFFFFF',

    // Color Palette - Dark Theme
    colorPalette        : {
        darkPrimary     : '#04C8D4',
        defaultPrimary  : '#512DA8',
        lightPrimary    : '#673AB7',
        textPrimary     : '#FFFFFF',
        accent          : '#E040FB',
        primaryText     : '#212121',
        secondaryText   : '#30363D',
        divider         : '#BDBDBD',

        body            : '#000000',

        h2: {
            fontColor   : '#FFFFFF'
        },
    }
}

const GlobalStyle = createGlobalStyle`
    ${'' /* =============================================
    GLOBAL
    ================================================= */}

    ${'' /* Color Palette */}
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
                      'Courier New', 'monospace';
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


    ${'' /* Layout */}
    .container {
        ${'' /* border: .2em solid lime; */}
        display                 : grid;
        grid-template-columns   : repeat(24, auto);
        /* grid-auto-rows          : minmax(3.5em, auto);
        grid-gap                : 0.2em; */

        ${'' /* height                  : calc(100vh - 7em - 3em); */}

        ${'' /* min-height: 0;
        min-width: 0;
        overflow: hidden; */}
    }

    #header {
        grid-column : 1 / 25;
        grid-row    : 1;
        margin-top  : 7em;
    }

    #main {
        ${'' /* border: .2em solid blue; */}
        grid-column : 2 / 24;
        grid-row    : 3 / 10;
        place-self  : center;
    }

    section {
        ${'' /* border: .2em solid #AF0000; */}
        ${'' /* grid-column : 2 / 24;
        grid-row    : 4 / 8; */}
        margin: 0 auto;
        ${'' /* place-self  : center; */}
        display         : flex;
        ${'' /* flex-direction  : row; */}
        flex-direction  : column;
        ${'' /* flex-wrap       : wrap; */}
        justify-content : center;

        padding         : .5em;
        width           : 90%;
        @media(min-width: 99.2em) and (max-width: 120em) {
            border: .3em dotted #AF0000;
            ${'' /* display     : block;
            grid-column : 1 / 25; */}
        }
    }

    footer {
        grid-row    : 10;
    }

    h1 {
        color       : ${props => props.theme.fontColor || '#393E46'};
        font-size   : 7em;
    }

    h2, h3, .slideTitle {
        color       : var(--text-primary);
        font-size   : 3.5em;
        margin-top  : 1em;
    }

    ${'' /* Classes */}
    .carousel {
        margin      : 0;
        ${'' /* max-height  : 50em; */}
        max-height  : calc(100vh - 14em);
        ${'' /* max-width   : 110em; */}
        ${'' /* max-width   : 151em; */}
        max-width   : calc(100vw - 2.2em);
        ${'' /* min-width   : calc(100vw - 3em); */}
        padding     : 0;
    }

    .control-prev, .control-arrow, .control-next, .control-arrow {
        background      : var(--light-primary) !important;
        border-radius   : 3em !important;
        height          : 2em !important;
        margin          : auto 0 !important;
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

    ${'' /* .carousel-root, */}
    ${'' /* .slider, */}
    .animated,
    ${'' /* .slide, */}
    .selected {
        padding         : 0;
        margin          : 0 0 1em 0;
    }

    .thumbs-wrapper {
        margin          : 1em auto;
    }

    .thumbs > .thumb:hover {
        border          : .35em solid var(--dark-primary);
    }

    .carousel-status{
        visibility      : hidden;
    }

    span.slideTitle{
        position        : absolute;
        left            : 10%;
        top             : 10%;
        color           : var(--pure-white);
        font-size       : 10em;
        text-shadow     : .3em .5em .8em var(--pure-black);
    }

    .carousel-root{
        /* max-width: 85%; */
        margin-top      : .5em;
    }

    .carousel.carousel-slider{
        max-height      : 60em;
    }
    

    ${'' /* Links */}
    .link {
        color               : #FFFFFF;
        font-size           : 1.4em;
        ${'' /* margin:             : auto 1.8em; */}
        padding             : .8em;
        &:hover {
            border          : .1em solid var(--accent);
            ${'' /* background      : var(--accent); */}
            background-image: radial-gradient(rgba(0, 0, 0, 1) 55%, var(--accent));
            border-radius   : 3em;
            box-shadow      : 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        &:active {
            background      : var(--light-primary);
            color           : #000000;
            font-weight     : bold;
        }
    }

    ${'' /* Buttons */}
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

    ${'' /* Inputs */}


    ${'' /* Others */}
    .popular-products{
        display:flex !important;
        flex-direction: row !important;
        flex-wrap: wrap;
        justify-content:space-around;
        width: 100%;
    }

    .category-slide{
        cursor: pointer;
    }

    ${'' /* .category-page{
        display:flex;
        justify-content:center;
        padding-top:10em;
    } */}

    ${'' /* .product-page-container{
        padding-top:10em;
    } */}
`

export default GlobalStyle
