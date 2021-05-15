import React from 'react'
import { useSelector } from 'react-redux'
import StarRatings from 'react-star-ratings'
import Table from '../../Components/Atoms/Table'
import { Link } from 'react-router-dom'



import styled from "styled-components"

const StatusIcon = styled.img`
background: url('https://api.iconify.design/bi:check-circle-fill.svg?color=chartreuse') no-repeat center center / contain;`

const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`

const InfoIcon = styled.img`
    background: url('https://api.iconify.design/bi:info-circle-fill.svg?color=lightblue') no-repeat center center / contain;
`

const AdminProducts = () => {

  const products = useSelector(state => state.product.products);


  const loading = useSelector(state => state.product.loading);

  if (loading) {
    return <h3>Cargando</h3>
  } else {
    return (
      <Table>
        <caption>Productos</caption>
        <thead>
          <tr>
            <th>*</th>
            <th className="name">Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Rating</th>
            <th>Categorías</th>
            <th>Activo</th>
            <th>Editar</th>
            <th>Borrar</th>
            <th>Info</th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr>
              <td>*</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td className="center-text">{product.stock}</td>
              <td className="center"><StarRatings
                rating={product.rating}
                starDimension="1em"
                starSpacing=".2em"
                numberOfStars={5}
                starRatedColor="gold"
              /></td>
              <td>{product.categories.map(cat => (<span className="cat">{cat.name}</span>))}</td>
              <td className="center-text" ><EditIcon /></td>
              <td className="center-text" onClick={() => alert(product.name)}><DeleteIcon onClick={() => alert(product.name)} /></td>
              <td className="center-text" ><Link to={`/admin/products/${product.id}`}><InfoIcon /></Link></td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }

}

export default AdminProducts
