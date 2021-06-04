import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCategories } from '../../Redux/Actions/Categories/CategoriesActions'
import Table from '../../Components/Atoms/Table'
import Swal from 'sweetalert2'

import styled from "styled-components"

const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`
const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`

const AdminCategories = () => {

    const dispatch = useDispatch();

    const categories = useSelector(state => state.category.categories);
    const products = useSelector(state => state.product.products)


    const deleteHandler = (id) => {

        const foundProduct = products.filter(product => product.categories.some(category => category.id === id))
        console.log(foundProduct)
        if (foundProduct.length > 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puedes eliminar una categoría con productos asociados!',
            })
            return
        }

        Swal.fire({
            title: 'Estas seguro?',
            text: "vas a eliminar una categoría",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7FFF00',
            cancelButtonColor: '#E90000',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteCategories(id))
                    Swal.fire(
                        'Eliminado!',
                        'Tu categoría fue eliminada.',
                        'success'
                    )
                }
            })
    }


    return (
        <Table>
            <caption>Categorías</caption>
            <thead>
                <tr>
                    <th>ID</th>
                    <th className="name">Nombre</th>
                    <th>Descripción</th>
                    <th>Foto</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                </tr>
            </thead>

            <tbody>
                {categories.map(category => (
                    <tr key={category.id}>
                        <td data-label="ID">{category.id}</td>
                        <td data-label="Nombre">{category.name}</td>
                        <td data-label="Descripción">{category.description}</td>
                        <td data-label="Foto"><img className="mini" src={category.photo} alt={category.name} /></td>
                        <td data-label="Editar" className="center-text"><Link to={`/admin/categories-edit/${category.id}`}><EditIcon /></Link></td>
                        <td data-label="Borrar" className="center-text" onClick={() => deleteHandler(category.id)}><DeleteIcon /></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default AdminCategories
