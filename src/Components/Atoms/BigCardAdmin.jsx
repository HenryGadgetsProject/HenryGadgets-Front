// **************Limpiar - No se va a usar**************
// ************Se usara el componente BigCard***********
// *****************************************************

import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

import styled from 'styled-components'

const BCA = styled.div`
    background-color: #FFFFFF;
    box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
    margin: 7em auto;
    ${'' /* height: 430px; */}
    max-height              : 40em;
    position: relative;
    ${'' /* width: 900px; */}
    width                   : 80em;
    z-index                 : 10;
    -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);

    /* Image on the left side */
    .thumbnail {
        background: #FFFFFF;
        box-shadow: 5px 5px 60px 0px rgba(0, 0, 0, 0.75);
        float: left;
        height: 37em;
        ${'' /* object-fit: contain; */}
        left: 3em;
        overflow: hidden;
        position: relative;
        top: -2.5em;
        width: 33em;
        z-index             : 20;
        -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
    }

    /*object-fit: cover;*/
    /*object-position: center;*/
    img.left {
        height: 100%;
        left: 50%;
        object-fit: contain;
        position: absolute;
        top: 50%;
        width: 100%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    /* Right side of the card */
    .right {
        margin-left: 40em;
        margin-right: 2em;
    }

    h3 {
        color               : var(--pure-black);
        font-size: 2em;
        margin-bottom       : .5em;
        padding-top: .4em;
    }

    .stars {
        background-color: gold;
        height: 3em;
        width: 11em;
        border-radius: 3em;
    }

    ${'' /* .author > img {
        padding-top: 5px;
        margin-left: 10px;
        float: left;
        height: 20px;
        width: 20px;
        border-radius: 50%;
    } */}

    h2 {
        padding-top: .8em;
        margin-right: .6em;
        text-align: right;
        font-size: .8em;
    }

    .separator {
        background          : #C3C3C3;
        border              : .1em solid #C3C3C3;
        margin-bottom       : 1em;
        margin-top          : 1em;
    }

    p {
        text-align: justify;
        font-size: 1.3em;
        line-height: 150%;
        color: #4B4B4B;
    }

    span {
        font-size: 1.6em;
        font-weight: 500;
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
        display: inline;
        list-style: none;
        padding-right: 4em;
        color: #7B7B7B;
    }

    /* Floating action button */
    .buy {
        position: absolute;
        background-color: #ff1744;
        color: white;
        border: .15em solid #ff1744;
        right: 70px;
        bottom: -20px;
        font-size: 1.4em;
        border-radius: 3em;
        font-size: 1.6em;
        width: 180px;
        height: 60px;
        text-align: center;
        box-sizing: border-box;
        -webkit-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
        transition: .3s;
        &:hover{
            transform: scale(1.10);
        }
    }

    .close{
        font-size: 2.5em;
        position:absolute;
        right:30px;
        top:20px;
        cursor:pointer;
    }


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        ${'' /* display             : flex; */}
        ${'' /* flex-direction      : column; */}
        margin              : 7em auto 11em;
        min-height          : 100% !important;
        width               : 90%;

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
            margin          : 0 auto 18em;
            padding         : 18em 0 0;
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
    }
`



const BigCardAdmin = ({ product }) => {



    return (

        <Link to='/admin/products'>
            <BCA>
                <div className="thumbnail">
                    <img className="left" src={product.big_image} alt='left' />
                </div>

                <div className="right">

                    <div className="close">X</div>
                    <h3>{product.name}</h3>

                    <StarRatings
                        rating={product.rating}
                        starDimension="1.2em"
                        starSpacing=".2em"
                        numberOfStars={5}
                        starRatedColor="gold"
                    />

                    <div className="separator"></div>
                    <span>Descripción</span><p>{product.description}</p>
                    <span>Stock</span>{product.stock > 0 ? <p>{product.stock}</p> : <p>No hay unidades disponibles.</p>}
                    <span>Precio</span><p>{product.price} $</p>

                </div>

                {/* <button className="buy">
                    Comprar
                </button> */}

            </BCA>
        </Link>
    )
}

export default BigCardAdmin


