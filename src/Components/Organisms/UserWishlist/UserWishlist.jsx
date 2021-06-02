import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Table from '../../Atoms/Table'
import { filterOrdersByUserId } from '../../../Redux/Actions/Order/OrderActions'
import { getReviewsByUserId } from '../../../Redux/Actions/Review/ReviewActions'

import styled from 'styled-components'

// const HistoryIcon = styled.img`
//     background: url('https://api.iconify.design/ant-design:history-outlined.svg?color=white') no-repeat center center / contain;
// `
// const DetailIcon = styled.img`
//     background: url('https://api.iconify.design/bx:bx-detail.svg?color=white') no-repeat center center / contain;
// `
const AddReview = styled.img`
    background: url('https://api.iconify.design/fluent:form-new-28-regular.svg?color=white') no-repeat center center / contain;
`
const GlassIcon = styled.img`
    background: url('https://api.iconify.design/foundation:magnifying-glass.svg?color=white') no-repeat center center / contain;
`

const UserOrders = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.user)
    const orders = useSelector(state => state.order.filteredOrders1)
    // const products = useSelector(state => state.product.products)
    const reviews = useSelector(state => state.review.reviews)
    //console.log(products)

    let history = useHistory()

    const [details, setDetails] = useState([])

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
            history.push('/user/review', productId)
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
        <>
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
                <caption>Deseos</caption>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th className="name">Producto</th>
                        <th>Cantidad</th>
                        <th>Sub Total</th>
                        <th>Crear</th>
                    </tr>
                </thead>

                <tbody>
                    {details.map(detail => {
                        console.log(detail)
                        return (
                            <tr key={detail.product_id}>
                                <td data-label="Foto"><img className="mini" src={detail.big_image} alt={detail.name} /></td>
                                <td data-label="Producto">{detail.name}</td>
                                <td data-label="Cantidad" className="center-text">{detail.quantity}</td>
                                <td data-label="Monto" className="center-text">{detail.sub_total}$</td>
                                <td data-label="Review"><AddReview onClick={() => { handleReview(detail.product_id) }} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default UserOrders
