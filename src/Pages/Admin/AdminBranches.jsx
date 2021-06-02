import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../../Components/Atoms/Table'

import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getBranches, deleteBranch } from '../../Redux/Actions/Branch/BranchesActions'

import styled from "styled-components"

const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`



const AdminBranches = () => {

    const dispatch = useDispatch();

    const branches = useSelector(state => state.branch.branches);



    const deleteHandler = (id) => {



        Swal.fire({
            title: 'Estas seguro?',
            text: "vas a eliminar una sucursal",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteBranch(id))
                    Swal.fire(
                        'Eliminado!',
                        'Tu categoría fue eliminada.',
                        'success'
                    )
                }
            })
    }


    return (


        <Table>
            <caption>Sucursales</caption>
            <thead>
                <tr>
                    <th>ID</th>
                    <th className="name">Nombre</th>
                    <th>Dirección</th>
                    <th>Atención</th>
                    <th>Editar</th>
                    <th>Eliminar</th>

                </tr>
            </thead>

            <tbody>
                {branches.map(branch => (
                    <tr key={branch.id}>
                        <td data-label="ID">{branch.id}</td>
                        <td data-label="Nombre">{branch.name}</td>
                        <td data-label="Descripción">{branch.address}</td>
                        <td data-label="Descripción">{branch.atention}</td>
                        <td data-label="Editar" className="center-text"><Link to={`/admin/branches-edit/${branch.id}`}><EditIcon /></Link></td>
                        <td data-label="Borrar" className="center-text" onClick={() => deleteHandler(branch.id)}><DeleteIcon /></td>
                        {/* <td className="center-text"><Link to={`/admin/categories/${branch.id}`}><InfoIcon /></Link></td> */}
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default AdminBranches
