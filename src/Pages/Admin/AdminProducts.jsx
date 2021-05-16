import React from 'react'
import { useSelector } from 'react-redux'
import StarRatings from 'react-star-ratings'
import Swal from 'sweetalert2'
import Table from '../../Components/Atoms/Table'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProducts } from '../../Redux/Actions/Product/ProductActions'



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

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "vas a eliminar un producto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProducts(id))
        Swal.fire(
          'Eliminado!',
          'Tu producto fue eliminado.',
          'success'
        )
      }
    })
  }

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
            <tr key={product.id}>
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
              <td>{product.categories.map(cat => (<span key={cat.name} className="cat">{cat.name}</span>))}</td>
              <td className="center-text">{(product.is_active) ? <StatusIcon /> : null}</td>
              <td className="center-text" ><EditIcon /></td>
              <td className="center-text" onClick={() => deleteHandler(product.id)}><DeleteIcon /></td>
              <td className="center-text" ><Link to={`/admin/products/${product.id}`}><InfoIcon /></Link></td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }

}

export default AdminProducts
