import React from 'react'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import Swal from 'sweetalert2'

import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'

const Table = styled.table`
    border-collapse: collapse;
    display:block;
    ${'' /* margin: 0 auto; */}

    caption {
        color: var(--pure-black);
        font-size: 2.2em;
        font-weight: bold;
        margin: 1.8em 0 .5em 0;
        text-align: center;
        ${'' /* align-self: flex-start; */}
    }

    th, td {
        padding: .8em;
        text-align: center;
        border-bottom: .1em solid #b6b6b6;
    }

    th {
        color: var(--pure-black);
        /* color: #FFFFFF; */
        font-size: 2em;
    }

    tr {
        /* background-color:#424242; */
        transition: background-color .5s ease;
    }

    tr:hover {
        background-color: var(--divider);
        td {
            color: var(--pure-black);
        }
        /* background-color:#626262; */
    }

    tbody tr td {
        text-align: center;
        /* color: #b6b6b6; */
        color: #424242;
        font-size: 2em;
    }

    img {
        height: 2em;
        width: 2em;
        outline: none;
        padding: 1em;
        transition: .3s;
        &:hover {
            transform: scale(1.20)
        }
    }

    img.mini {
        object-fit: cover;
        width: 8em;
        height: 8em;
    }

    .center-text {
        text-align:center;
    }

`
// Icons
const BuyIcon = styled.img`
    background: url('https://api.iconify.design/bi:credit-card-2-back.svg?color=%23ff1744') no-repeat center center / contain;
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`

const MyChart = () => {

    // const dispatch = useDispatch();

    // const categories = useSelector(state => state.category.categories);
    const products = useSelector(state => state.product.products)

    const deleteHandler = () => {
        Swal.fire({
          title: 'Estas seguro?',
          text: "Vas a eliminar un producto de tu Carrito!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancelar'
        })
      }

    return (
        <div className="container">
            <NavBar className="nav" />
            <Breadcrumb id="breadcrumb" />
            {/* <Header id="header">
                <h1>Henry Gadgets</h1>
            </Header> */}

            <Table>
                <caption>Productos agregados al Carrito</caption>
                <thead>
                    <tr>
                    {/* <th>Id</th> */}
                    <th>Imágen</th>
                    <th className="name">Nombre</th>
                    <th>Precio</th>
                    <th>Eliminar</th>
                    <th>Comprar</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                    <tr key={product.id}>
                        {/* <td>{category.id}</td> */}
                        <td><img className="mini" src={product.big_image} alt={product.name} /></td>
                        <td>{product.name}</td>
                        <td>1000$</td>
                        <td><DeleteIcon onClick={deleteHandler}/></td>
                        <td><BuyIcon/></td>
                    </tr>
                    ))}
                    <tr>
                        <td>Total</td>
                        <td></td>
                        {/* <td></td> */}
                        <td>100000$</td>
                        <td><BuyIcon/></td>
                    </tr>
                </tbody>
            </Table>

            <Footer />
        </div>
    )
}

export default MyChart
