import styled from 'styled-components'

const Table = styled.table`
    border-collapse     : collapse;
    display             : block;

    caption {
        color           : white;
        font-size       : 2.2em;
        font-weight     : bold;
        margin          : 1.8em 0 .5em 0;
        text-align      : left;
    }

    th, td {
        padding         : .8em;
        text-align      : left;
        border-bottom   : .1em solid #b6b6b6;
    }

    th {
        color           : #FFFFFF;
        font-size       : 1.6em;
    }

    tr {
        background      : #424242;
        transition      : background-color .5s ease;
    }

    tr:hover {
        background      : #626262;
    }

    tbody tr td {
        text-align      : left;
        color           : #b6b6b6;
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
        background-color: #686892;
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
            border          : .2em solid #b6b6b6;
            margin-bottom   : 4em;
            width           : 100%;
            :hover {
                background  : transparent;
            }
        }

        td, td:nth-child(even) {
            border          : none;
            border-bottom   : 1px solid #eee; 
            position        : relative;
            padding-left    : 50%;
            :hover {
                background  : #626262;
            }
        }

        td:nth-child(even) {
            background      : #515151;
        }

        td:before {
            color           : white;
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
