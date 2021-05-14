import React from "react";
import Header from "../Components/Atoms/Header";
import Main from "../Components/Atoms/Main";
import styled from "styled-components";

const Menu = styled.aside`
  align-self: left;
  background: black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 14em);
  margin: 0 auto;
  padding: 2em;
  width: 25%;

  button {
    align-items: center;
    display: flex;
    ${'' /* justify-content: space-around; */}
    padding: 1em;
    width: 100%;

    background: black;
    border: .2em solid black;
    color: #FFFFFF;
    font-size: 2em;

    margin: .5em 0;
    padding: .5em;
    transition: .3s;
    &:hover {
      transform: scale(1.08)
    }
    &:active {
      color: #ff1744;
    }

    img {
      border: none;
      padding: 1em;
      margin-right: 1em;
      width: 2em;
    }
  }

  h4 {
    color: #FFFFFF;
  }
`;

const Content = styled.div`
  align-self: right;
  width: 75%;
  padding: 0 5em;
  background: #424242;
  border-left: .2em solid #ff1744;

  table {
		    display:block;
		    margin:0 auto;
		  }
		  tbody tr td {
		    text-align: center;
		  }
  
  th {
    color: #FFFFFF;
    font-size: 1.6em;
    border-bottom: .05em solid #b6b6b6;
  }
  td {
    font-size: 1.4em;
    color: #b6b6b6;
  }
`;

const EditIcon = styled.img`
    width: 2em;
    height: 2em;
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
    padding: 1em;
    transition: .3s;
    &:hover {
        transform: scale(1.20)
    }
`

const DeleteIcon = styled.img`
    width: 2em;
    height: 2em;
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
    padding: 1em;
    transition: .3s;
    &:hover {
        transform: scale(1.20)
    }
`

const ProductIcon = styled.img`
    width: 2em;
    height: 2em;
    background: url('https://api.iconify.design/akar-icons:tag.svg?color=white') no-repeat center center / contain;
    padding: 1em;
`

const AddProductIcon = styled.img`
    width: 2em;
    height: 2em;
    background: url('https://api.iconify.design/carbon:tag-edit.svg?color=white') no-repeat center center / contain;
    padding: 1em;
`

const CategoryIcon = styled.img`
    width: 2em;
    height: 2em;
    background: url('https://api.iconify.design/bx:bx-category-alt.svg?color=white') no-repeat center center / contain;
    padding: 1em;
`

const AddCategoryIcon = styled.img`
    width: 2em;
    height: 2em;
    background: url('https://api.iconify.design/ant-design:appstore-add-outlined.svg?color=white') no-repeat center center / contain;
    padding: 1em;
`

const Title = styled.h2`
    color: #FFFFFF;
    margin-top: .8em;
`

const Admin = () => {
  return (
    <div className="container">
      <Header id="header">{/* <h1>Henry Gadgets</h1> */}</Header>

      <Main>

        <Menu>
            <button><ProductIcon/> Productos</button>
            <button><CategoryIcon/> Categorías</button>
          
            <button><AddCategoryIcon/> Agregar Productos</button>
            <button><AddProductIcon/> Agregar Categorías</button>

        </Menu>
      
        <Content>
          <Title>Categorias</Title>

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
  );
};

export default Admin;
