import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/Organisms/NavBar'
import { useSelector, useDispatch } from 'react-redux'
import Breadcrumb from '../../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../../Components/Atoms/Main'
import Table from '../../Components/Atoms/Table'
import Footer from '../../Components/Organisms/Footer'
import styled from 'styled-components'
import { filterOrdersByUserId } from '../../Redux/Actions/Order/OrderActions'
import { getReviewsByUserId } from '../../Redux/Actions/Review/ReviewActions'

const Aside = styled.aside`
display: flex;
flex-direction: column;
align-items: center;
background  : black;
border      : none;
padding     : 2em;
height: 100vh;

img {
    border          : none;
    margin-right    : 1.6em;
    outline         : none;
    padding         : 1em;
}

span {
    color           : #FFFFFF;
    font-size       : 2em;
}

p {
    color           : #FFFFFF;
    font-size: 2em;
}

${'' /* =================================================
MEDIUM - CHECK TABLET HORIZONTAL VIEW 1024px
===================================================== */}
@media(min-width: 992px) and (max-width: 1199px) {
    img {
        margin      : 1em auto;
    }

    span {
        display     : none;
    }
}

${'' /* =================================================
SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
===================================================== */}
@media(max-width: 992px) {
    
}
`
const UserSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;

    background: #424242;

    /* Me fuí al baño */

    table {
        font-size: 1.2em;
        margin: 0 auto;

        caption {
            color: white;
        }
    }
`
const HistoryIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:history-outlined.svg?color=white') no-repeat center center / contain;
`
const DetailIcon = styled.img`
    background: url('https://api.iconify.design/bx:bx-detail.svg?color=white') no-repeat center center / contain;
`
const AddReview = styled.img`
    background: url('https://api.iconify.design/fluent:form-new-28-regular.svg?color=white') no-repeat center center / contain;
`
const GlassIcon = styled.img`
    background: url('https://api.iconify.design/foundation:magnifying-glass.svg?color=white') no-repeat center center / contain;
`

const UserProfile = () => {

    const user = useSelector(state => state.user.user)
    const orders = useSelector(state => state.order.filteredOrders1)
    const products = useSelector(state => state.product.products)
    const reviews = useSelector(state => state.review.reviews)
    //console.log(products)

    const [details, setDetails] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(filterOrdersByUserId(user.id))
        dispatch(getReviewsByUserId(user.id))
    }, [dispatch, user.id])

    const handleReview = (productId) => {
        // console.log('REVIEWS', reviews)
        // console.log(productId)
        const reviewFound = reviews.find(rev => rev.productId === productId)
        if (reviewFound) {
            alert('no puedes agregar review')
            // editar
        } else {
            //crear
        }
    }

    const handleGetDetails = (order) => {

        // console.log(order.orderDetails)

        const linea = order.orderDetails.map(x => {
            return {
                product_id: x.product.id,
                quantity: x.quantity,
                name: x.product.name,
                big_image: x.product.big_image,
                price: x.product.price,
                sub_total: x.product.price * x.quantity
            }
        })
        setDetails(linea)
    }



    return (
        <div className="container">
            <NavBar className="nav" />
            <Breadcrumb id="breadcrumb" />
            <Main id="main">
                <Aside>
                    <img src='https://i.dlpng.com/static/png/5066008-circled-user-icon-user-profile-icon-png-png-image-transparent-profile-icon-png-820_860_preview.png' alt='profile'></img>
                    <div>
                        <p>Usuario</p>
                        <p>{user.first_name} {user.last_name}</p>
                        <p>Email</p>
                        <p>{user.email}</p>
                    </div>
                </Aside>
                <UserSection>
                    <Table>
                        <caption>Historial</caption>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th className="name">Fecha</th>
                                <th>Total</th>
                                <th>Ver Detalles</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map(order => {

                                return (
                                    <tr key={order.id}>
                                        <td data-label="ID" className="center-text">{order.id}</td>
                                        <td data-label="Fecha" className="center-text">28/05/2021</td>
                                        <td data-label="Total" className="center-text">{order.total_price}$</td>
                                        <td data-label="Detalles" className="center-text"><GlassIcon onClick={() => handleGetDetails(order)} /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                    <Table>
                        <caption>Detalles</caption>
                        <thead>
                            <tr>
                                <th>*</th>
                                <th className="name">Producto</th>
                                <th>Cantidad</th>
                                <th>Sub Total</th>
                                <th>Review</th>
                            </tr>
                        </thead>

                        <tbody>
                            {details.map(detail => (
                                <tr key={detail.product_id}>
                                    <td data-label="Foto"><img className="mini" src={detail.big_image} alt={detail.name} /></td>
                                    <td data-label="Producto">{detail.name}</td>
                                    <td data-label="Cantidad" className="center-text">{detail.quantity}</td>
                                    <td data-label="Monto" className="center-text">{detail.sub_total}$</td>
                                    <td data-label="Review"><AddReview onClick={() => { handleReview(detail.product_id) }} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </UserSection>
            </Main>

            <Footer />

        </div>
    )
}

export default UserProfile