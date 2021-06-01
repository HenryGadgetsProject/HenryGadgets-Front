import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders, deleteOrder, filterOrders } from '../../Redux/Actions/Order/OrderActions'

import Table from '../../Components/Atoms/Table'
import Swal from 'sweetalert2'
import styled from "styled-components"


const NumbersContainer = styled.ul`
    list-style: none;
    display: flex;
    align-self: center;
    background: var(--pure-white);
    padding: 0;
`
const PageNumbers = styled.li`
    font-size: 1.2em;
    font-weight: 500;
    text-align: center;
    padding: 1.6em;
    border: .1em solid var(--divider);
    cursor: pointer;
    transition: .5s;
    &:hover {
        background-color: #ff616f;
    }
    &.active {
        font-weight: 700;
        background-color: #ff1744;
        color: black;
    }
`
const Button = styled.button`
    font-size: 1.2em;
    text-align: center;
    padding: 1.6em;
    background-color: transparent;
    border: .1em solid var(--divider);
    color: black;
    cursor: pointer;
    transition: .5s;
    &:hover {
        background-color: #ff1744;
    }
    &:focus {
        outline: none;
    }
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`
const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`
const ResetIcon = styled.img`
    background: url('https://api.iconify.design/bx:bx-reset.svg?color=green') no-repeat center center / contain;
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

    const orders = useSelector(state => state.order.filteredOrders)

    // ******************** Paginado ********************
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(12)
    const [pageNumberLimit] = useState(5)
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
    const pages = [];
    for (let i = 1; i <= Math.ceil(orders.length / itemsPerPage); i++) {
        pages.push(i)
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem)
    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    }
    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1)
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }
    // const handleMoreBtn = () => {
    //     setItemsPerPage(itemsPerPage + 8)
    // }
    let pageIncrementBtn = null
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <Button onClick={handleNextBtn}>&hellip;</Button>
    }
    let pageDecrementBtn = null
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <Button onClick={handlePrevBtn}>&hellip;</Button>
    }
    const renderPageNumbers = pages.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <PageNumbers
                    className={currentPage === number ? 'active' : null} key={number} id={number} onClick={handleClick}>
                    {number}
                </PageNumbers>
            )
        } else {
            return null;
        }
    })
    // ******************** Paginado ********************

    const handleTerm = (term) => {
        dispatch(filterOrders(term))
    }

    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Vas a eliminar una Orden",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7FFF00',
            cancelButtonColor: '#E90000',
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
        <>
            <div className="filter-buttons">
                <ResetIcon onClick={() => dispatch(getOrders())} />
                <CartIcon onClick={() => handleTerm('cart')} />
                <ProcessingIcon onClick={() => handleTerm('processing')} />
                <CompletedIcon onClick={() => handleTerm('completed')} />
                <CancelledIcon onClick={() => handleTerm('cancelled')} />
            </div>

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
                    {currentItems?.map(order => (
                        <tr key={order.id}>
                            <td data-label="ID">{order.id}</td>
                            <td data-label="Estado">
                                {(order.state === 'cart' ? <CartIcon /> : null)}
                                {(order.state === 'created' ? <CreatedIcon /> : null)}
                                {(order.state === 'processing' ? <ProcessingIcon /> : null)}
                                {(order.state === 'cancelled' ? <CancelledIcon /> : null)}
                                {(order.state === 'completed' ? <CompletedIcon /> : null)}
                            </td>
                            <td data-label="Total">{order.total_price}</td>
                            <td data-label="Nombre">{order.user?.first_name}</td>
                            <td data-label="Apellido" className="center-text">{order.user?.last_name}</td>
                            <td data-label="Editar" className="center-text"><Link to={`/admin/order-edit/${order.id}`}><EditIcon /></Link></td>
                            <td data-label="Borrar" className="center-text" onClick={() => deleteHandler(order.id)}><DeleteIcon /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>

                <NumbersContainer>
                    <Button onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}>Anterior</Button>
                    {pageDecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}
                    <Button onClick={handleNextBtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>Siguiente</Button>
                </NumbersContainer>
        </>
    )
}

export default AdminOrders