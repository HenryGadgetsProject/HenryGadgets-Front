import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../../Components/Atoms/Table'

import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteUser } from '../../Redux/Actions/User/UserActions'


import styled from "styled-components"

const StatusIcon = styled.img`
    background: url('https://api.iconify.design/bi:check-circle-fill.svg?color=chartreuse') no-repeat center center / contain;
`

const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`

// const InfoIcon = styled.img`
//     background: url('https://api.iconify.design/bi:info-circle-fill.svg?color=lightblue') no-repeat center center / contain;
// `

const AdminUsers = () => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.user.users);

    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "vas a eliminar un usuario",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteUser(id))
                    Swal.fire(
                        'Eliminado!',
                        'El usuario fue eliminado.',
                        'success'
                    )
                }
            })
    }


    return (
        <Table>
            <caption>Usuarios</caption>
            <thead>
                <tr>
                    <th>ID</th>
                    <th className="name">Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                    <th>Administrador</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                </tr>
            </thead>

            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td data-label="ID">{user.id}</td>
                        <td data-label="Nombres">{user.first_name}</td>
                        <td data-label="Apellidos">{user.last_name}</td>
                        <td data-label="Correo">{user.email}</td>
                        <td data-label="Administrador">{(user.is_admin) ? <StatusIcon /> : null}</td>
                        <td data-label="Editar" className="center-text"><Link to={`/admin/users-edit/${user.id}`}><EditIcon /></Link></td>
                        <td data-label="Borrar" className="center-text" onClick={() => deleteHandler(user.id)}><DeleteIcon /></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default AdminUsers
