import styled from 'styled-components'

const BigCard = styled.div`
    ${'' /* border: 2px solid lime; */}
    background              : var(--pure-white);
    box-shadow              : 8px 8px 90px 0px rgba(0, 0, 0, 0.75);
    margin                  : 7em auto;
    max-height              : 45em;
    position                : relative;
    width                   : 110em;
    z-index                 : 10;
    -webkit-box-shadow      : 8px 8px 90px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow         : 8px 8px 90px 0px rgba(0, 0, 0, 0.75);

    /* Left side */
    .thumbnail {
        ${'' /* border: 2px solid blue; */}
        background          : var(--pure-white);
        box-shadow          : 5px 5px 60px 0px rgba(0, 0, 0, 0.75);
        float               : left;
        height              : 50em;
        left                : 3em;
        overflow            : hidden;
        position            : relative;
        top                 : -2.5em;
        width               : 50em;
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

    /* Right side */
    .right {
        margin-left         : 60em;
        margin-right        : 2em;
        width               : 43%
    }

    h3 {
        color               : var(--pure-black);
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
        background          : var(--dark-primary);
        border              : .1em solid var(--dark-primary);
        border-radius       : 3em;
        cursor              : pointer;
        outline             : none;
        transition          : all .3s linear;
        &:hover {
            background      : var(--background-gradient);
            border-color    : var(--dark-primary);
            color           : var(--pure-white);
            transform       : scale(1.10);
        }
        &:active {
            background      : var(--background-gradient);
            color           : var(--pure-white);
            font-weight     : bold;
        }

        bottom              : -1.5em;
        box-shadow          : 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        box-sizing          : border-box;
        font-size           : 1.6em;
        height              : 3.7em;
        position            : absolute;
        right               : 2em;
        text-align          : center;
        width               : 8em;
        z-index             : 30;
        -webkit-box-shadow  : 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow     : 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
    }

    .review {
        background          : var(--dark-primary);
        border              : .1em solid var(--dark-primary);
        border-radius       : 3em;
        cursor              : pointer;
        outline             : none;
        transition          : all .3s linear;
        &:hover {
            background      : var(--background-gradient);
            border-color    : var(--dark-primary);
            color           : var(--pure-white);
            transform       : scale(1.10);
        }
        &:active {
            background      : var(--background-gradient);
            color           : var(--pure-white);
            font-weight     : bold;
        }


        bottom              : -1.5em;
        box-shadow          : 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        box-sizing          : border-box;
        color               : white;
        font-size           : 1.6em;
        height              : 3.7em;
        position            : absolute;
        right               : 14em;
        text-align          : center;
        width               : 11em;
        z-index             : 30;
        -webkit-box-shadow  : 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow     : 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
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
    MEDIUM - CHECK TABLET HORIZONTAL VIEW 1024px
    ===================================================== */}
    @media(min-width: 992px) and (max-width: 1199px) {
        ${'' /* height: 90em; */}
        width: 95em;

        .right {
            margin-left: 58em;
            width: 35%;
        }

        .review {
            right: 12em;
        }
    }


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        margin              : 5em 2em;
        min-height          : 100% !important;
        width               : 100%;

        /* Left side */
        .thumbnail {
            ${'' /* display         : flex; */}
            height          : 20em !important;
            ${'' /* width           : 44.3em; */}
            width           : 100%;
            position        : absolute;
            left            : 0;
            margin          : 0 auto;
        }

        /* Right side of the card */
        .right {
            margin          : 19em auto 2em;
            width           : 80%;
        }

        /* Right side */
        h3 {
            margin-bottom   : 0;
            padding         : 0;
        }

        .separator {
            margin          : .5em 0;
        }

        p {
            margin          : .2em 0;
        }

        /* Floating action button */
        .buy {
            width           : 10em;
            right           : .5em !important;
            bottom          : -2.5em;
        }

        .review {
            width           : 10em;
            right           : 11.3em !important;
            bottom          : -2.5em;
        }
    }
`

export default BigCard
