import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'


const AdminAside = styled.aside`
  background: black;
  ${'' /* height: 100vh; */}
  min-height      : 100%;

  button {
    align-items: center;
    background: black;
    ${'' /* border: .2em solid black; */}
    border: none;
    outline: none;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    font-size: 1.8em;
    margin: .5em auto;
    padding: .5em;
    transition: .5s;
    width: 92%;
    &:hover {
      transform: scale(1.08)
    }
    &:active {
      color: #ff1744;
    }

    img {
      border: none;
      margin-right: 1em;
      outline: none;
      padding: 1em;
      width: 2em;
    }
  }

  h4 {
    color: #FFFFFF;
  }
`

const ProductIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:tag.svg?color=white') no-repeat center center / contain;
`

const AddProductIcon = styled.img`
    background: url('https://api.iconify.design/carbon:tag-edit.svg?color=white') no-repeat center center / contain;
`
const CategoryIcon = styled.img`
    background: url('https://api.iconify.design/bx:bx-category-alt.svg?color=white') no-repeat center center / contain;
`

const AddCategoryIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:appstore-add-outlined.svg?color=white') no-repeat center center / contain;
`

const AdminSideBar = () => {
  return (
    <AdminAside>
      <Link to='/admin/products'><button><ProductIcon /> Productos</button></Link>
      <Link to='/admin/categories'><button><CategoryIcon /> Categorías</button></Link>
      <Link to='/admin/users'><button><ProductIcon /> Usuarios</button></Link>

      <Link to='/admin/product'><button><AddProductIcon /> Agregar Productos</button></Link>
      <Link to='/admin/category'><button><AddCategoryIcon /> Agregar Categorías</button></Link>
    </AdminAside>
  )
}

export default AdminSideBar
