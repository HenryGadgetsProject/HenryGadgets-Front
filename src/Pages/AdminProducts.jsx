import React from 'react'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'

import styled from "styled-components"
import { useSelector } from 'react-redux'

const Content = styled.div`
  align-self: right;
  background: #424242;
  border-left: .2em solid #ff1744;
  padding: .3em 6em;
  width: 75%;

  h3 {
    color: #FFFFFF;
    margin-top: .8em;
  }

  table {
    border-collapse: collapse;
		display:block;
		margin:0 auto;
	}

  th, td {
    padding: .8em;
    text-align: left;
    border-bottom: .1em solid #b6b6b6;
   }

  th {
    color: #FFFFFF;
    font-size: 1.6em;
  }

	tbody tr td {
	  text-align: left;
    color: #b6b6b6;
    font-size: 1.4em;
	}

  img {
    height: 2em;
    outline: none;
    padding: 1em;
    transition: .3s;
    width: 2em;
    &:hover {
      transform: scale(1.20)
    }
  }

  .center-text{
      text-align:center;
  }
`

const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`

const AdminProducts = ({ products }) => {

  // const products = useSelector(state => state.product.products);

  return (
    <div>



      <Content>
        <h3>Productos</h3>

        <table>
          <thead>
            <tr>
              <th>*</th>
              <th className="name">Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Descripción</th>
              <th>Rating</th>
              <th>Activo</th>
              <th>Categorías</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>

          <tbody>

            {products.map(product => (
              <tr>
                <td>*</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="center-text">{product.stock}</td>
                <td>{product.description}</td>
                <td className="center-text">{product.rating}</td>
                <td className="center-text">{(product.is_active) ? <span>si</span> : <span>no</span>}</td>
                <td>{product.category}</td>
                <td className="center-text"><EditIcon /></td>
                <td className="center-text"><DeleteIcon /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>

    </div>
  )
}

export default AdminProducts
