import styled from 'styled-components'

const Table = styled.table`
    border-collapse: collapse;
    display:block;
    
    ${'' /* margin: 0 auto; */}

    caption {
        color: white;
        font-size: 2.2em;
        font-weight: bold;
        margin: 1.8em 0 .5em 0;
        text-align: left;
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
        background-color:#424242;
        transition: background-color .5s ease;
    }

    tr:hover {
        background-color:#626262;
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
`

export default Table
