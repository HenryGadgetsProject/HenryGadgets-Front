import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders, deleteOrder } from '../../Redux/Actions/Order/OrderActions'

import Table from '../../Components/Atoms/Table'
import Swal from 'sweetalert2'
import styled from "styled-components"

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`
const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`
const CartIcon = styled.img`
    background: url('https://api.iconify.design/el:shopping-cart-sign.svg?color=%23FF1744') no-repeat center center / contain;
`
const ProcessingIcon = styled.img`
    background: url('https://api.iconify.design/uim:process.svg?color=%23ffff00') no-repeat center center / contain;
`
const CreatedIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:arrow-forward-thick-fill.svg?color=%231565c0') no-repeat center center / contain;
`
const CancelledIcon = styled.img`
    background: url('https://api.iconify.design/ic:round-cancel.svg?color=%23d50000') no-repeat center center / contain;
`
const CompletedIcon = styled.img`
    background: url('https://api.iconify.design/teenyicons:tick-circle-solid.svg?color=chartreuse') no-repeat center center / contain;
`

const AdminOrders = () => {

    const dispatch = useDispatch();

    const orders = useSelector(state => state.order.orders)

    const [change, setChange] = useState(false)

    useEffect(() => {
        dispatch(getOrders())
        setChange(false)
    }, [change])
    
    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Vas a eliminar una Orden",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteOrder(id))
                    Swal.fire(
                        'Eliminado!',
                        'El usuario fue eliminado.',
                        'success'
                    )
                }
            })
    }

    return (
        <Table>
            <caption>Ordenes</caption>
            <thead>
                <tr>
                    <th>ID</th>
                    <th className="name">Estado</th>
                    <th>Precio Total</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                </tr>
            </thead>

            <tbody>
                {orders?.map(order => (
                    <tr key={order.id}>
                        <td data-label="ID">{order.id}</td>
                        <td data-label="Estado">
                            {(order.state === 'cart' ? <CartIcon/> : null)}
                            {(order.state === 'created' ? <CreatedIcon/> : null)}
                            {(order.state === 'processing' ? <ProcessingIcon/> : null)}
                            {(order.state === 'cancelled' ? <CancelledIcon/> : null)}
                            {(order.state === 'completed' ? <CompletedIcon/> : null)}
                        </td>
                        <td data-label="Total">{order.total_price}</td>
                        <td data-label="Nombre">{order.user.first_name}</td>
                        <td data-label="Apellido" className="center-text">{order.user.last_name}</td>
                        <td data-label="Editar" className="center-text"><Link to={`/admin/order-edit/${order.id}`}><EditIcon/></Link></td>
                        <td data-label="Borrar" className="center-text" onClick={() => deleteHandler(order.id)}><DeleteIcon /></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default AdminOrders