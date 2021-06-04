import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Main from '../Components/Atoms/Main'
import OrderForm from '../Components/Organisms/OrderForm/OrderForm'
import Footer from '../Components/Organisms/Footer'


const ConfirmBuy = () => {

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

            <Main id='main'>
                <div className="container-confirmation">
                    <OrderForm total={total} />
                </div>
            </Main>

            <Footer />
        </div>
    )
}

export default ConfirmBuy
