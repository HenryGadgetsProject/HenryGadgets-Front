import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOffer } from '../../Redux/Actions/Offer/OffersActions'
import Table from '../../Components/Atoms/Table'

import styled from "styled-components"

const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`
const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`

const AdminOffers = () => {

    const dispatch = useDispatch();
    const offers = useSelector(state => state.offer.offers);

    const deleteHandler = (offerId) => {

        dispatch(deleteOffer(offerId))
    }

    return (
        <>
            <Table>
                <caption>Ofertas</caption>
                <thead>
                    <tr>
                        <th className="name">Categoría</th>
                        <th>Descuento</th>
                        <th>Duración</th>
                        <th>Activo</th>
                        <th>Eliminar</th>

                    </tr>
                </thead>

                <tbody>
                    {offers.map(offer => (
                        <tr key={offer.id}>
                            <td data-label="Categoría">{offer.targetName}</td>
                            <td data-label="Descuento">{offer.discount * 100}%</td>
                            <td data-label="Duración">{new Date(Date.parse(offer.updatedAt) + offer.duration).toUTCString()}</td>
                            <td data-label="Activo">{(offer.active) ? 'Si' : 'No'}</td>
                            <td data-label="Eliminar" className="center-text" onClick={() => deleteHandler(offer.id)}><DeleteIcon /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default AdminOffers
