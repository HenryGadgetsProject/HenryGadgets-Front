import styled from 'styled-components'

const BigCard = styled.div`
    ${'' /* border: 2px solid lime; */}
    background-color        : #FFFFFF;
    box-shadow              : 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
    margin                  : 7em auto;
    max-height              : 45.5em;
    position                : relative;
    ${'' /* width                   : 110em; */}
    width                   : calc(100vw - 40em);
    z-index                 : 10;
    -webkit-box-shadow      : 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow         : 10px 10px 93px 0px rgba(0, 0, 0, 0.75);

    /* Image on the left side */
    .thumbnail {
        ${'' /* border: 2px solid blue; */}
        background          : #FFFFFF;
        box-shadow          : 5px 5px 60px 0px rgba(0, 0, 0, 0.75);
        float               : left;
        ${'' /* height              : 50em; */}
        height              : calc(100vh - 29em);
        ${'' /* object-fit          : contain; */}
        left                : 3em;
        overflow            : hidden;
        position            : relative;
        ${'' /* position            : absolute; */}
        top                 : -2.5em;
        ${'' /* width               : 50em; */}
        width               : calc(100vh - 29em);
        z-index             : 20;
        -webkit-box-shadow  : 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow     : 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
    }

    img.left {
        ${'' /* border: 2px solid red; */}
        height              : 100%;
        left                : 50%;
        object-fit          : contain;
        position            : absolute;
        top                 : 50%;
        transform           : translate(-50%, -50%);
        width               : 100%;
        -webkit-transform   : translate(-50%, -50%);
        -ms-transform       : translate(-50%, -50%);
    }

    /* Right side of the card */
    .right {
        margin-left         : 60em;
        margin-right        : 2em;
        max-width: 43%
    }

    h3 {
        font-size           : 2em;
        margin-bottom       : .5em;
        padding-top         : .4em;
    }

    .stars {
        background-color    : gold;
        height              : 3em;
        width               : 11em;
        border-radius       : 3em;
    }

    ${'' /* .author > img {
        padding-top         : 5px;
        margin-left         : 10px;
        float               : left;
        height              : 20px;
        width               : 20px;
        border-radius       : 50%;
    } */}

    h2 {
        padding-top         : .8em;
        margin-right        : .6em;
        text-align          : right;
        font-size           : .8em;
    }

    .separator {
        background          : #C3C3C3;
        border              : .1em solid #C3C3C3;
        margin-bottom       : 1em;
        margin-top          : 1em;
    }

    p {
        text-align          : justify;
        font-size           : 1.3em;
        line-height         : 150%;
        color               : #4B4B4B;
    }

    span {
        font-size           : 1.6em;
        font-weight         : 500;
    }

    /* DATE of release*/
    h5 {
        position            : absolute;
        left                : 3.5em;
        bottom              : -5em;
        font-size           : 6em;
        color               : #C3C3C3;
    }

    h6 {
        color               : var(--pure-black);
        position            : absolute;
        left                : 3.5em;
        bottom              : -3em;
        font-size           : 2em;
    }

    /* Those futur buttons */
    ul {
        margin              : 18em 0 0 25em;
    }

    li {
        display             : inline;
        list-style          : none;
        padding-right       : 4em;
        color               : #7B7B7B;
    }

    /* Floating action button */
    .buy {
        background          : #FF1744;
        border              : .15em solid #FF1744;
        border-radius       : 3em;
        bottom              : -1.5em;
        box-shadow          : 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        box-sizing          : border-box;
        color               : white;
        font-size           : 1.6em;
        height              : 3.7em;
        outline             : none;
        position            : absolute;
        right               : 2em;
        text-align          : center;
        transition          : .5s;
        width               : 8em;
        z-index             : 30;
        -webkit-box-shadow  : 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow     : 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        &:hover {
            transform       : scale(1.10);
        }
    }

    .review {
        background-color    : #FF1744;
        border              : .15em solid #FF1744;
        border-radius       : 3em;
        bottom              : -1.5em;
        box-shadow          : 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        box-sizing          : border-box;
        color               : white;
        font-size           : 1.6em;
        height              : 3.7em;
        outline             : none;
        position            : absolute;
        right               : 14em;
        text-align          : center;
        transition          : .5s;
        width               : 11em;
        z-index             : 30;
        -webkit-box-shadow  : 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow     : 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        &:hover {
            transform       : scale(1.10);
        }
    }

    .close {
        cursor              : pointer;
        font-size           : 2.5em;
        position            : absolute;
        right               : .8em;
        top                 : .1em;
        z-index             : 30;
    }


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        ${'' /* margin      : 0; */}
        width       : 100%;
    }
`

export default BigCard
