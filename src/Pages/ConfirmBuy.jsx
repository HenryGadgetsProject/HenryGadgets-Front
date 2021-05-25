import React, { useState, useEffect } from 'react'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
//import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import { deleteItemFromCart, incrementQuantity, decrementQuantity, clearCart } from '../Redux/Actions/Cart/CartActions'
import OrderForm from '../Components/Organisms/OrderForm/OrderForm'


const ConfirmBuy = () => {

    const dispatch = useDispatch();
    const history = useHistory()

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




    return (
        <div className="container">
            <NavBar />
            <Breadcrumb id="breadcrumb" />

            <div className="container-confirmation">
                <h2 className="text-center">Productos a comprar</h2>

                <div className="resume">
                    {products.map(product => (
                        <div className="line" key={product.id}>
                            <div className="name">{product.name}</div>
                            <div className="quantity">{product.quantity}</div>
                            <div className="price">{product.price}</div>
                            <div className="total">{product.quantity * product.price}</div>
                        </div>
                    ))}

                    <div className="total">{`Total: ${total}`}</div>
                </div>

                {console.log('TOTAL', total)}
                <OrderForm total={total} />

            </div>


            <Footer />
        </div>
    )
}

export default ConfirmBuy
