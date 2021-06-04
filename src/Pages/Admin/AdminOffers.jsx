import React from 'react'
import Main from '../../Components/Atoms/Main'
import OffersForm from '../../Components/Organisms/OffersForm'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../../Components/Atoms/Table'
import { deleteOffer } from '../../Redux/Actions/Offer/OffersActions'

import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

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

                            <td data-label="Nombre">{offer.targetName}</td>
                            <td data-label="Dirección">{offer.discount * 100}%</td>
                            <td data-label="Atención">{new Date(Date.parse(offer.updatedAt) + offer.duration).toUTCString()}</td>
                            <td data-label="Atención">{(offer.active) ? 'Si' : 'No'}</td>
                            <td data-label="Eliminar" className="center-text" onClick={() => deleteHandler(offer.id)}><DeleteIcon /></td>

                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* <div className="container">
                <Main id="main">
                    <OffersForm />
                </Main>
            </div> */}
        </>
    )




}

export default AdminOffers
