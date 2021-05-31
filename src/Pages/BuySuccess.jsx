import React, { useEffect } from 'react'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import { useSelector } from 'react-redux'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import queryString from 'query-string'
import { useLocation, useHistory } from 'react-router-dom'
import { clearCart, sendMail, changeToCompleted } from '../Redux/Actions/Cart/CartActions'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
//import ReviewsForm from '../Components/Organisms/ReviewsForm/ReviewsForm'


const BuySuccess = ({ orderId }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { search } = useLocation()
    const values = queryString.parse(search)

    const user = useSelector(state => state.user.user)
    const cart = useSelector(state => state.cart.cartList)
    const status = useSelector(state => state.cart.status)


    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    // dispatch(sendMail(body))
    // dispatch(dispatch(clearCart))
    // Toast.fire({
    //     icon: 'success',
    //     title: 'Te hemos enviado un mail'
    // })

    const client = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
    }

    const body = {
        products: cart,
        client: client,
        orderId: orderId,
        total: total
    }

    useEffect(() => {
        if (values.status === 'approved') {
            setTimeout(() => {
                dispatch(sendMail(body))
                dispatch(changeToCompleted(orderId))
                dispatch(dispatch(clearCart))
                Toast.fire({
                    icon: 'success',
                    title: 'Te hemos enviado un mail'
                })
                history.push("/home")
            }, 4500)
            return
        }
    }, [user])

    return (
        < div className="container" >
            <NavBar id="nav-general" />
            <Breadcrumb id="breadcrumb" />
            {/* <Header id="header">
                <h1>Henry Gadgets</h1>
            </Header> */}

            <Main id="main">
                <div className="success-container">
                    <h3>Gracias por tu compra</h3>
                    <div className="success-cart">
                        {cart.map(product => (
                            <div className="success-product" key={product.id}>
                                <div className="product-name">{product.name}</div>
                                <div className="product-quantity">{product.quantity}</div>
                                <div className="product-price">{product.price}</div>
                                <div className="product-total">{product.price * product.quantity}</div>
                            </div>
                        ))}
                        <div className="success-total"><span>Total</span>{total}</div>
                    </div>

                    <div className="success-payment">
                        <div className="type"><span>Orden: </span> {orderId}</div>
                        <div className="method"><span>Medio de pago:</span>  {values.payment_type}</div>
                        <div className="payment-id"><span>Id de pago:</span>{values.payment_id}</div>

                    </div>
                    {(status === 200) ? <h2>enviado</h2> : null}
                </div>

                {/* <ReviewsForm /> */}

            </Main>

            <Footer />
        </div >
    )
}

export default BuySuccess
