import styled from 'styled-components'

const Table = styled.table`
    border-collapse     : collapse;
    display             : block;
    
    ${'' /* margin: 0 auto; */}

    caption {
        color           : white;
        font-size       : 2.2em;
        font-weight     : bold;
        margin          : 1.8em 0 .5em 0;
        text-align      : left;
        ${'' /* align-self: flex-start; */}
    }

    th, td {
        padding: .8em;
        text-align: left;
        border-bottom: .1em solid #b6b6b6;
    }

    th {
        color: #FFFFFF;
        font-size: 1.6em;
    }

    tr {
        background:#424242;
        transition: background-color .5s ease;
    }

    tr:hover {
        background:#626262;
    }

    tbody tr td {
        text-align: left;
        color: #b6b6b6;
        font-size: 1.4em;
    }

    img {
        height: 2em;
        outline: none;
        padding: 1em;
        transition: .3s;
        width: 2em;
        &:hover {
            transform: scale(1.20)
        }
    }

    img.mini {
        width:100px;
        height:auto;
    }

    .center-text {
        text-align:center;
    }

    span.cat {
        margin-right:.5em;
        background-color:#686892;
        border-radius:3em;
        padding:.3em .5em;
    }


    ${'' /* =================================================
    SMALL - CHECK TABLET OR MOBILE VIEW 768px
    ===================================================== */}
    @media(max-width: 768px) {
        ${'' /* border: 0; */}
        border-spacing: 0;
        ${'' /* margin-left: auto; 
        margin-right: auto; */}
        margin: 0 auto;

        caption {
            font-size: 1.6em;
        }

        ${'' /* th, td {
            padding: .8em;
            text-align: left;
            border-bottom: .1em solid #b6b6b6;
        } */}

        ${'' /* th {
            color: #FFFFFF;
            font-size: 1.6em;
        }

        tr {
            background-color:#424242;
            transition: background-color .5s ease;
        } */}

        thead {
            border: none;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }

        tr {
            ${'' /* border-bottom: 3px solid #ddd; */}
            border-bottom: .2em solid #b6b6b6;
            display: block;
            margin-bottom: .8em;
        }

        td:nth-child(even) {
            background: #525252;

            ${'' /* background:#424242;
            background:#626262; */}
        }

        td {
            ${'' /* border-bottom: 1px solid #ddd; */}
            display: block;
            ${'' /* font-size: .8em; */}
            ${'' /* text-align: right; */}
        }

        td::before {
            ${'' /* content: attr(data-label); */}
            float: left;
            ${'' /* font-weight: bold; */}
            ${'' /* text-transform: uppercase; */}
        }

        td:last-child {
            border-bottom: 0;
        }
    }
`

export default Table
