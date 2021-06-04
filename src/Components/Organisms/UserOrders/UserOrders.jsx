import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { filterOrdersByUserId } from '../../../Redux/Actions/Order/OrderActions'
import { getReviewsByUserId } from '../../../Redux/Actions/Review/ReviewActions'
import Table from '../../Atoms/Table'

import styled from 'styled-components'

const AddReview = styled.img`
    background: var(--icon-add-review) no-repeat center center / contain;
`
const MagnifyingGlass = styled.img`
    background: var(--icon-magnifying-glass) no-repeat center center / contain;
`

const UserOrders = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.user)
    const orders = useSelector(state => state.order.filteredOrders1)
    const reviews = useSelector(state => state.review.reviews)

    let history = useHistory()

    const [details, setDetails] = useState([])

    useEffect(() => {
        dispatch(filterOrdersByUserId(user.id))
        dispatch(getReviewsByUserId(user.id))
    }, [dispatch, user.id])

    const handleReview = (productId) => {
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
                                <td data-label="Detalles" className="center-text"><MagnifyingGlass onClick={() => handleGetDetails(order)} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <Table>
                <caption>Detalles</caption>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th className="name">Producto</th>
                        <th>Cantidad</th>
                        <th>Sub Total</th>
                        <th>Crear review</th>
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
                                <td data-label="Sub Total" className="center-text">{detail.sub_total}$</td>
                                <td data-label="Crear review"><AddReview onClick={() => { handleReview(detail.product_id) }} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default UserOrders
