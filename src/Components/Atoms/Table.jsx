import styled from 'styled-components'

const Table = styled.table`
    border-collapse     : collapse;
    display             : block;

    caption {
        color           : var(--font-color);
        font-size       : 2.2em;
        font-weight     : bold;
        margin          : 1.8em 0 .5em 0;
        text-align      : left;
    }

    th, td {
        padding         : .8em;
        text-align      : left;
        ${'' /* border-bottom   : .1em solid #B6B6B6; */}
        border-bottom   : .1em solid var(--divider);
    }

    th {
        color           : var(--font-color);
        ${'' /* color           : var(--pure-white); */}
        font-size       : 1.6em;
    }

    tr {
        ${'' /* background      : #424242; */}
        background      : var(--body);
        transition      : background-color .5s linear;
    }

    tr:hover {
        ${'' /* background      : #626262; */}
        background      : var(--background-gradient);
    }

    tbody tr td {
        text-align      : left;
        ${'' /* color           : #B6B6B6; */}
        color           : var(--font-color);
        font-size       : 1.4em;
    }

    img {
        height          : 2em;
        outline         : none;
        padding         : 1em;
        transition      : .3s;
        width           : 2em;
        &:hover {
            transform   : scale(1.20)
        }
    }

    img.mini {
        width           : 100px;
        height          : auto;
    }

    .center-text {
        text-align      : center;
    }

    span.cat {
        margin-right    : .5em;
        background      : var(--secontary-text);
        border-radius   : 3em;
        padding         : .3em .5em;
    }


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        border-spacing  : 0;
        margin          : 0 auto;
        width: 90%;

        thead, tbody, th, td, tr { 
		    display     : block;
            min-height  : 2.5em;
	    }

        caption {
            font-size   : 1.6em;
            margin      : .5em 0;
        }

        thead tr {
            overflow    : hidden;
            position    : absolute;
            top         : -9999em;
		    left        : -9999em;
            width       : .01px;
        }

        tbody tr td {
            text-align  : center;
        }

        tr {
            border          : .2em solid var(--divider);
            margin-bottom   : 4em;
            width           : 100%;
            :hover {
                ${'' /* background  : transparent; */}
                ${'' /* background  : #626262; */}
                background  : var(--pure-gray);
            }
        }

        td, td:nth-child(even) {
            border          : none;
            border-bottom   : 1px solid var(--pure-white); 
            position        : relative;
            padding-left    : 50%;
            :hover {
                ${'' /* background  : #626262; */}
                background  : var(--background-gradient);
            }
        }

        td:nth-child(even) {
            ${'' /* background      : #515151; */}
            background  : var(--aside-home);
        }

        td:before {
            color           : var(--font-color);
            content         : attr(data-label);
            float           : left;
            font-weight     : bold;
            left            : .6em;
            padding-right   : 1em;
            position        : absolute;
            top             : .6em;
            white-space     : nowrap;
            width           : 45%;
        }

        td:last-child {
            border-bottom   : 0;
        }
    }
`

export default Table
