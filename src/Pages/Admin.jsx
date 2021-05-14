import React from "react"
import Header from "../Components/Atoms/Header"
import Main from "../Components/Atoms/Main"
import styled from "styled-components"

const Menu = styled.aside`
  align-self: left;
  background: black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  padding: 2.2em 0 0 3em;
  width: 25%;

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
	  text-align: center;
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
`

const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
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


const Admin = () => {
  return (
    <div className="container">
      <Header id="header">{/* <h1>Henry Gadgets</h1> */}</Header>

      <Main id="main">

        <Menu>
            <button><ProductIcon/> Productos</button>
            <button><CategoryIcon/> Categorías</button>
          
            <button><AddCategoryIcon/> Agregar Productos</button>
            <button><AddProductIcon/> Agregar Categorías</button>

        </Menu>
      
        <Content>
          <h3>Categorías</h3>

          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Descripción</th>
                <th>Rating</th>
                <th>Categorías</th>
                <th>Editar</th>
                <th>Borrar</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Auriculares</td>
                <td>500$</td>
                <td>50</td>
                <td>Descripción sarasa. Descripción sarasa. Descripción sarasa. </td>
                <td>5</td>
                <td>Audio, Tecnologia</td>
                <td><EditIcon/></td>
                <td><DeleteIcon/></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Auriculares</td>
                <td>500$</td>
                <td>50</td>
                <td>Descripción sarasa. Descripción sarasa. Descripción sarasa.</td>
                <td>5</td>
                <td>Audio, Tecnologia</td>
                <td><EditIcon/></td>
                <td><DeleteIcon/></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Auriculares</td>
                <td>500$</td>
                <td>50</td>
                <td>Descripción sarasa. Descripción sarasa. Descripción sarasa.</td>
                <td>4</td>
                <td>Audio, Tecnologia</td>
                <td><EditIcon/></td>
                <td><DeleteIcon/></td>
              </tr>
            </tbody>
          </table>

        </Content>
      </Main>
    </div>
  )
}

export default Admin
