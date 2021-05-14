import React from "react"
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Main from "../Components/Atoms/Main"
import Footer from '../Components/Organisms/Footer'
import { useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router-dom';
import AdminSidebar from '../Components/Organisms/AdminSideBar'
import StarRatings from 'react-star-ratings';

import styled from "styled-components"


const Content = styled.section`
  align-self: right;
  background: #424242;
  border-left: .2em solid #ff1744;
  padding: .3em 6em;
  width: 80%;

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

  th.name {
        width: 255px;
    }

  tr{
    background-color:#424242; 
    transition: background-color 0.5s ease;  
  }

  tr:hover{
    background-color:#626262;
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

  img.mini{
    width:100px;
    height:auto;
  }

  span.cat{
    margin-right:.5em;
    background-color:#686892;
    border-radius:3em;
    padding:.3em .5em;
  }

  .center{
    text-align:center;
  }
`

const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`

const StatusIcon = styled.img`
background: url('https://api.iconify.design/bi:check-circle-fill.svg?color=chartreuse') no-repeat center center / contain;
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`


const Admin = () => {

  const products = useSelector(state => state.product.products);
  const categories = useSelector(state => state.category.categories)


  const editHandler = (e) => {
    alert(e)
  }

  return (
    <div className="container">
      <NavBar className="nav" />
      <Breadcrumb id="breadcrumb" />
      {/* <Header id="header">
        <h1>Henry Gadgets</h1>
      </Header> */}

      <Main id="main">

        <AdminSidebar />

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
              </tr>
            </thead>

            <tbody>

              {products.map(product => (
                <tr>
                  <td>*</td>
                  <td>{product.name}</td>
                  <td className="center">{product.price}</td>
                  <td className="center">{product.stock}</td>
                  <td className="center"><StarRatings
                    rating={product.rating}
                    starDimension="1em"
                    starSpacing=".2em"
                    numberOfStars={5}
                    starRatedColor="gold"
                  /></td>
                  <td>{product.categories?.map(cat => (<span className="cat">{cat.name}</span>))}</td>
                  <td className="center">{(product.is_active) ? <StatusIcon /> : null}</td>
                  <td className="center"><EditIcon onClick={() => editHandler(product.id)} /></td>
                  <td className="center"><DeleteIcon /></td>
                </tr>
              )

              )}
            </tbody>
          </table>

          <h3>Categorías</h3>

          <table>
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
          </table>

        </Content>
      </Main>

      <Footer />
    </div>
  )
}

export default Admin
