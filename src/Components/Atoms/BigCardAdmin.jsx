// **************Limpiar - No se va a usar**************
// ************Se usara el componente BigCard***********
// *****************************************************

import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'

const BCA = styled.div`
    position: relative;
    height: 430px;
    width: 900px;
    margin: 200px auto;
    background-color: #FFFFFF;
    -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);

    /* Image on the left side */
    .thumbnail {
        object-fit: contain;
        background: #FFFFFF;
        float: left;
        position: relative;
        left: 30px;
        top: -30px;
        height: 40em;
        width: 40em;
        -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 5px 5px 60px 0px rgba(0, 0, 0, 0.75);
        overflow: hidden;
    }

    /*object-fit: cover;*/
    /*object-position: center;*/
    img.left {
        object-fit: contain;
        position: absolute;
        left: 50%;
        top: 50%;
        height: auto;
        width: 100%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    /* Right side of the card */
    .right {
        margin-left: 500px;
        margin-right: 20px;
    }

    h3 {
        padding-top: 15px;
        font-size: 2em;
    }

    .stars {
        background-color: gold;
        height: 30px;
        width: 110px;
        border-radius: 3em;
    }

    .author > img {
        padding-top: 5px;
        margin-left: 10px;
        float: left;
        height: 20px;
        width: 20px;
        border-radius: 50%;
    }

    h2 {
        padding-top: 8px;
        margin-right: 6px;
        text-align: right;
        font-size: 0.8rem;
    }

    .separator {
        margin-top: 1em;
        margin-bottom: 1em;
        border: 1px solid #C3C3C3;
    }

    p {
        text-align: justify;
        font-size: 1.2rem;
        line-height: 150%;
        color: #4B4B4B;
    }

    span {
        font-size: 1.6em;
        font-weight: 500;
    }

    /* DATE of release*/
    h5 {
        position: absolute;
        left: 35px;
        bottom: -50px;
        font-size: 6rem;
        color: #C3C3C3;
    }

    h6 {
        position: absolute;
        left: 43px;
        bottom: -15px;
        font-size: 2rem;
        color: #C3C3C3;
    }

    /* Those futur buttons */
    ul {
        margin: 180px 0 0 250px;
    }

    li {
        display: inline;
        list-style: none;
        padding-right: 40px;
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


