import React from 'react'
import styled from "styled-components"


const Menu = styled.aside`
  ${'' /* align-self: left; */}
  background: black;
  ${'' /* box-sizing: border-box;
  display: flex;
  flex-direction: column; */}
  ${'' /* height: 100vh; */}
  ${'' /* margin: 0 auto; */}
  ${'' /* padding: 2.2em 0 0 3em;
  width: 25%; */}

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
        <Menu>
            <button><ProductIcon /> Productos</button>
            <button><CategoryIcon /> Categorías</button>
            <button><AddCategoryIcon /> Agregar Productos</button>
            <button><AddProductIcon /> Agregar Categorías</button>
        </Menu>
    )
}

export default AdminSideBar
