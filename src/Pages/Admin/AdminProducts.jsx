import React from 'react'
import styled from "styled-components"
import { useSelector } from 'react-redux'
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom'

const Content = styled.section`
  align-self: right;
  background: #424242;  
  padding: .3em 6em;
  width: 100%;

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

  tr{
    background-color:#424242; 
    transition: background-color 0.5s ease;  
  }

  tr:hover{
    background-color:#626262;
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

  span.cat{
    margin-right:.5em;
    background-color:#686892;
    border-radius:3em;
    padding:.3em .5em;
  }
`

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
                <td className="center-text">{(product.is_active) ? <StatusIcon /> : null}</td>
                <td className="center-text" ><EditIcon /></td>
                <td className="center-text" onClick={() => alert(product.name)}><DeleteIcon onClick={() => alert(product.name)} /></td>
                <td className="center-text" ><Link to={`/admin/products/${product.id}`}><InfoIcon /></Link></td>

              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </div>
  )
}

export default AdminProducts
