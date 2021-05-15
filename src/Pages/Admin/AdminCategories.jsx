import React, { useEffect } from 'react'
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteCategories, getCategories } from '../../Redux/Actions/Categories/CategoriesActions'

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

	tbody tr td {
	  text-align: left;
    color: #b6b6b6;
    font-size: 1.4em;
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

const InfoIcon = styled.img`
    background: url('https://api.iconify.design/bi:info-circle-fill.svg?color=lightblue') no-repeat center center / contain;
`

const AdminCategories = () => {

  const dispatch = useDispatch();

  const categories = useSelector(state => state.category.categories);





  const deleteHandler = (id) => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "vas a eliminar una categoría",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCategories(id))
        Swal.fire(
          'Eliminado!',
          'Tu categoría fue eliminada.',
          'success'
        )
      }
    })
  }


  return (
    <div>
      <Content>
        <h3>Categorías</h3>

        {categories.length === 0 ?

          <h4>No hay categorías</h4>

          :

          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th className="name">Nombre</th>
                <th>Descripcion</th>
                <th>photo</th>
                <th>Editar</th>
                <th>Borrar</th>
                <th>Info</th>
              </tr>
            </thead>

            <tbody>

              {categories.map(category => (
                <tr>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td><img className="mini" src={category.photo} alt={category.name} /></td>
                  <td className="center-text" onClick={() => alert(category.id)}><EditIcon /></td>
                  <td className="center-text" onClick={() => deleteHandler(category.id)}><DeleteIcon /></td>
                  <td className="center-text"><Link to={`/admin/categories/${category.id}`}><InfoIcon /></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </Content>
    </div>
  )
}

export default AdminCategories
