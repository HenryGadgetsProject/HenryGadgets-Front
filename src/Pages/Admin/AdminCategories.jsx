
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../../Components/Atoms/Table'

import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteCategories } from '../../Redux/Actions/Categories/CategoriesActions'


import styled from "styled-components"

const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`

const InfoIcon = styled.img`
    background: url('https://api.iconify.design/bi:info-circle-fill.svg?color=lightblue') no-repeat center center / contain;
`

const AdminCategories = () => {

  const dispatch = useDispatch();

  const categories = useSelector(state => state.category.categories);


  const deleteHandler = (id) => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "vas a eliminar una categoría",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
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
          <th>Id</th>
          <th className="name">Nombre</th>
          <th>Descripcion</th>
          <th>photo</th>
          <th>Editar</th>
          <th>Borrar</th>
          <th>Info</th>
        </tr>
      </thead>

      <tbody>
        {categories.map(category => (
          <tr key={category.id}>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>{category.description}</td>
            <td><img className="mini" src={category.photo} alt={category.name} /></td>
            <td className="center-text"><Link to={`/admin/categories-edit/${category.id}`}><EditIcon /></Link></td>
            <td className="center-text" onClick={() => deleteHandler(category.id)}><DeleteIcon /></td>
            <td className="center-text"><Link to={`/admin/categories/${category.id}`}><InfoIcon /></Link></td>

          </tr>
        ))}
      </tbody>
    </Table>

  )
}

export default AdminCategories
