import React from 'react'
import { useSelector } from 'react-redux'
import Table from '../../Components/Atoms/Table'

import styled from "styled-components"

const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`

const AdminCategories = () => {

  const categories = useSelector(state => state.category.categories);

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
        </tr>
      </thead>

      <tbody>
        {categories.map(category => (
          <tr>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>{category.description}</td>
            <td><img className="mini" src={category.photo} alt={category.name} /></td>
            <td><EditIcon /></td>
            <td><DeleteIcon /></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default AdminCategories
