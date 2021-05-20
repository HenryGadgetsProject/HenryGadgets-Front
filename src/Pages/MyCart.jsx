import React, { useState, useEffect } from 'react'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import Swal from 'sweetalert2'

import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import { deleteItemFromCart } from '../Redux/Actions/Cart/CartActions'

const Table = styled.table`
    border-collapse: collapse;
    display:block;
    ${'' /* margin: 0 auto; */}

    caption {
        color: var(--pure-black);
        font-size: 2.2em;
        font-weight: bold;
        margin: 1.8em 0 .5em 0;
        text-align: center;
        ${'' /* align-self: flex-start; */}
    }

    th, td {
        padding: .8em;
        text-align: center;
        border-bottom: .1em solid #b6b6b6;
    }

    th {
        color: var(--pure-black);
        /* color: #FFFFFF; */
        font-size: 2em;
    }

    tr {
        /* background-color:#424242; */
        transition: background-color .5s ease;
    }

    tr:hover {
        background-color: var(--divider);
        td {
            color: var(--pure-black);
        }
        /* background-color:#626262; */
    }

    tbody tr td {
        text-align: center;
        /* color: #b6b6b6; */
        color: #424242;
        font-size: 2em;
    }

    img {
        ${'' /* height: 2em;
        width: 2em; */}
        object-fit: contain;
        outline: none;
        padding: 1em;
        transition: .3s;
        width: 100%;
        &:hover {
            transform: scale(1.20)
        }
    }

    img.mini {
        object-fit: cover;
        width: 8em;
        height: 8em;
    }

    .center-text {
        text-align:center;
    }

`
// Icons
const BuyIcon = styled.img`
    background: url('https://api.iconify.design/bi:credit-card-2-back.svg?color=%23ff1744') no-repeat center center / contain;
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`

const MyCart = () => {

    const dispatch = useDispatch();

    // const categories = useSelector(state => state.category.categories);
    const products = useSelector(state => state.cart.cartList)

    const [total, setTotal] = useState();


    useEffect(() => {
        if (products) {
            setTotal(products.reduce((acc, item) => {
                acc = acc + (item.price * item.quantity)
                return acc;
            }, 0.00))
        }
    }, [products])

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

    return (
        <div className="container">
            <NavBar />
            <Breadcrumb id="breadcrumb" />

            {(products.length === 0)
                ?
                <h2 className="text-center">No hay productos en el carrito</h2>
                :
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
                                <td><img className="mini" src={product.big_image} alt={product.name} /></td>
                                <td>{product.name}</td>
                                <td><input type="number" min="1" max="{product.stock}" value={Number(product.quantity)} /></td>
                                <td>{product.price}</td>
                                <td><DeleteIcon onClick={() => deleteHandler(product)} /></td>
                                {/* <td><BuyIcon /></td> */}
                            </tr>
                        ))}
                        <tr>
                            <td>Total</td>

                            <td>{total}</td>

                        </tr>
                    </tbody>
                </Table>
            }

            <Footer />
        </div>
    )
}

export default MyCart
