import React, { useState, useEffect } from 'react'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
// import Table from '../Components/Atoms/Table'
import Footer from '../Components/Organisms/Footer'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {
    deleteItemFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart
} from '../Redux/Actions/Cart/CartActions'

import styled from 'styled-components'


const Table = styled.table`
    border-collapse         : collapse;
    display                 :block;
    margin                  : 0 auto;
    width                   : 80%;

    caption {
        color               : var(--pure-black);
        font-size           : 2.2em;
        font-weight         : bold;
        margin              : 1.8em 0 .5em 0;
        text-align          : center;
        ${'' /* align-self: flex-start; */}
    }

    th, td {
        padding             : .8em;
        text-align          : center;
        border-bottom       : .1em solid #b6b6b6;
    }

    th {
        color               : var(--pure-black);
        /* color: #FFFFFF; */
        font-size           : 2em;
    }

    tr {
        /* background-color:#424242; */
        transition          : background-color .5s ease;
    }

    tr:hover {
        background-color    : var(--divider);
        td {
            color           : var(--pure-black);
        }
        /* background-color:#626262; */
    }

    tbody tr td {
        text-align          : center;
        /* color: #b6b6b6; */
        color               : #424242;
        font-size           : 2em;
    }

    img {
        ${'' /* height: 2em;
        width: 2em; */}
        object-fit          : contain;
        outline             : none;
        padding             : 1em;
        transition          : .3s;
        width               : 100%;
        &:hover {
            transform       : scale(1.20)
        }
    }

    img.mini {
        object-fit          : cover;
        width               : 8em;
        height              : 8em;
    }

    .center-text {
        text-align          :center;
    }

    span.quantity{
        padding             :0 1em;
    }


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        border-spacing      : 0;
        margin              : 0 auto;
        width               : 90%;

        thead, tbody, th, td, tr {
            display         : block;
            min-height      : 2.5em;
        }

        caption {
            display         : flex;
            font-size       : 1.8em;
            justify-content : center;
            margin          : .5em 0;
        }

        thead tr {
            overflow        : hidden;
            position        : absolute;
            top             : -9999em;
            left            : -9999em;
            width           : .01px;
        }

        tbody tr td {
            text-align      : center;
        }

        tr {
            border          : .2em solid #B6B6B6;
            margin-bottom   : 4em;
            width           : 100%;
            :hover {
                background  : transparent;
            }
        }

        td, td:nth-child(even) {
            border          : none;
            border-bottom   : 1px solid #EEEEEE;
            color           : black;
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
            color           : black;
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

// Icons
// const BuyIcon = styled.img`
//     background: url('https://api.iconify.design/bi:credit-card-2-back.svg?color=%23ff1744') no-repeat center center / contain;
// `

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`

const MyCart = () => {

    const dispatch = useDispatch();

    const history = useHistory()

    // const categories = useSelector(state => state.category.categories);
    const products = useSelector(state => state.cart.cartList)

    const [total, setTotal] = useState()

    useEffect(() => {
        if (products) {
            setTotal(products.reduce((acc, item) => {
                acc = acc + (item.price * item.quantity)
                return acc;
            }, 0.00))
        }
    }, [products])

    const handleConfirmation = () => {

        if (products.length > 0) {
            history.push('/confirmation')
        }

    }

    const deleteHandler = (product) => {
        // alert(productId)
        dispatch(deleteItemFromCart(product))
        Swal.fire({
            title: 'Estas seguro?',
            text: "Vas a eliminar un producto de tu Carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        })
    }

    const incrementHandler = (product) => {
        dispatch(incrementQuantity(product))
    }

    const decrementHandler = (product) => {
        if (product.quantity === 1) {
            dispatch(deleteItemFromCart(product))
        }
        dispatch(decrementQuantity(product))
    }


    return (
        <div className="container">
            <NavBar />
            <Breadcrumb id="breadcrumb" />

            {(products.length === 0)
                ?
                <Main id="main">
                    <h2 className="text-center">No hay productos en el carrito</h2>
                </Main>
                :
                <Main id="main">
                    <aside>
                        {/* <div className="buttons"> */}
                            <button className="btn btn-md" onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
                            <button className="btn btn-md" onClick={() => history.push('/home')}>Seguir Comprando</button>
                            <button className="btn btn-md" onClick={handleConfirmation}>Confirmar Compra</button>
                        {/* </div> */}
                    </aside>

                    <section>
                        <Table>
                            <caption>Productos agregados al Carrito</caption>
                            <thead>
                                <tr>
                                    {/* <th>Id</th> */}
                                    <th>Imágen</th>
                                    <th className="name">Nombre</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Eliminar</th>
                                    {/* <th>Comprar</th> */}
                                </tr>
                            </thead>

                            <tbody>
                                {products.map(product => (
                                    <tr key={product.id}>
                                        {/* <td>{category.id}</td> */}
                                        <td data-label="Imágen"><img className="mini" src={product.big_image} alt={product.name} /></td>
                                        <td data-label="Nombre">{product.name}</td>
                                        <td data-label="Cantidad">
                                            <button className="btn-quantity" onClick={() => decrementHandler(product)}>-</button>
                                            <span className="quantity">{product.quantity}</span>
                                            <button className="btn-quantity" onClick={() => incrementHandler(product)}>+</button></td>
                                        <td data-label="Precio">{product.price}</td>
                                        <td data-label="Eliminar"><DeleteIcon onClick={() => deleteHandler(product)} /></td>
                                        {/* <td><BuyIcon /></td> */}
                                    </tr>
                                ))}
                                <tr>
                                    <td>Total</td>

                                    <td>{total}</td>

                                </tr>
                            </tbody>
                        </Table>
                    </section>
                </Main>
            }

            <Footer />
        </div>
    )
}

export default MyCart
