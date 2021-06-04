import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../../Atoms/Table'
import { getWishlist, removeFromWishlist, postWishlist, resetWishList } from '../../../Redux/Actions/Wishlist/WishlistActions'

import styled from 'styled-components'

const GlassIcon = styled.img`
    background: url('https://api.iconify.design/foundation:magnifying-glass.svg?color=white') no-repeat center center / contain;
`
const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`
const CartIcon = styled.img`
    background: url('https://api.iconify.design/fa-solid:cart-arrow-down.svg?color=chartreuse') no-repeat center center / contain;
`
const SaveIcon = styled.img`
    background: url('https://api.iconify.design/entypo:save.svg?color=%231976d2') no-repeat center center / contain;
`
const ChangesIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:exclamation-circle-outlined.svg?color=orange') no-repeat center center / contain;
`

const UserWishlist = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        dispatch(getWishlist(user.id))
    }, [])


    // ***** Este estado contiene el arreglo de objetos cuando le doy al Corazón en /home *****
    const wishList = useSelector(state => state.wishlist.wishList)
    console.log('LISTA DE DESEOS', wishList)
    // ***** Este estado contiene el arreglo de objetos cuando le doy al Corazón en /home *****

    const handleDelete = (product) => {
        dispatch(removeFromWishlist(user, product))
    }

    const handleClear = () => {
        dispatch(resetWishList())
    }

    return (
        <>
            <Table>
                <caption>Tus productos deseados</caption>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Borrar</th>
                        <th>Agregar</th>
                    </tr>
                </thead>

                <tbody>
                    {wishList?.map(p => {
                        return (
                            <tr key={p.id}>
                                <td data-label="Foto"><img className="mini" src={p.big_image} alt={p.name} /></td>
                                <td data-label="Nombre">{p.name}</td>
                                <td data-label="Precio" className="center-text">{p.price}$</td>
                                <td data-label="Borrar" className="center-text"><DeleteIcon onClick={() => handleDelete(p)} /></td>
                                <td data-label="Agregar" className="center-text"><CartIcon /></td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td data-label="Borrar Todo" className="center-text">Borrar todo</td>
                        <td data-label="Borrar" className="center-text"><DeleteIcon onClick={() => handleClear()} /></td>
                        <td></td>
                        <td data-label="Agregar Todo" className="center-text">Agregar todo</td>
                        <td data-label="Carrito" className="center-text"><CartIcon /></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default UserWishlist
