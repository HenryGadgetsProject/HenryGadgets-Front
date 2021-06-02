import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getReviewsByUserId, deleteReview } from '../../../Redux/Actions/Review/ReviewActions'
import Table from '../../Atoms/Table'
import Swal from 'sweetalert2'


import styled from "styled-components"

const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`

const AllReviews = () => {

    const dispatch = useDispatch()
    
    const reviews = useSelector(state => state.review.reviews)
    const user = useSelector(state => state.user.user)
    // const loading = useSelector(state => state.user.loading)
    const history = useHistory()

    useEffect(() => {
        dispatch(getReviewsByUserId(user.id))
    }, [dispatch])


    const editHandler = (review) => {
        console.log('esta es la review desde all reviews', review)
        history.push('/user/edit-review', review)
    }


    const deleteHandler = (id) => {

        Swal.fire({
            title: 'Estas seguro?',
            text: "vas a eliminar un comentario",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7FFF00',
            cancelButtonColor: '#E90000',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteReview(id))
                    Swal.fire(
                        'Eliminado!',
                        'Tu comentario fue eliminado.',
                        'success'
                    )
                }
            })
    }


    return (
        <Table>
            <caption>Reviews</caption>
            <thead>
                <tr>
                    {/* <th>ID</th> */}
                    <th className="name">Titulo</th>
                    <th>Descripción</th>
                    <th>Calificación</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>

            <tbody>
                {reviews?.map(review => (
                    <tr key={review.id}>
                        {/* <td data-label="ID">{review.id}</td> */}
                        <td data-label="Titulo">{review.title}</td>
                        <td data-label="Descripción">{review.description}</td>
                        <td data-label="Calificación">{review.rating}</td>
                        <td data-label="Editar" className="center-text" onClick={() => editHandler(review)}><EditIcon /></td>
                        <td data-label="Eliminar" className="center-text" onClick={() => deleteHandler(review.id)}><DeleteIcon /></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default AllReviews
