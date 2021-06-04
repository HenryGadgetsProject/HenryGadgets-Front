import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeUserStatus, promoteUser, getUsers, resetPassword } from '../../Redux/Actions/User/UserActions'
import Table from '../../Components/Atoms/Table'
import Swal from 'sweetalert2'

import styled from "styled-components"

const StatusIcon = styled.img`
    background: url('https://api.iconify.design/bi:check-circle-fill.svg?color=chartreuse') no-repeat center center / contain;
`
const ResetIcon = styled.img`
background: url('https://api.iconify.design/bx:bx-reset.svg?color=green') no-repeat center center / contain;
`
const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/el:ban-circle.svg?color=red') no-repeat center center / contain;
`
const PromoteIcon = styled.img`
    background: url('https://api.iconify.design/bi:arrow-up-circle-fill.svg?color=chartreuse') no-repeat center center / contain;
`
const NotAdmin = styled.img`
    background: url('https://api.iconify.design/entypo:circle-with-cross.svg?color=%23ff3d00') no-repeat center center / contain;
`


const AdminUsers = () => {

    const dispatch = useDispatch();

    const users = useSelector(state => state.user.users);
    const [change, setChange] = useState(false)
    const [userStatus, setUserStatus] = useState('active')

    useEffect(() => {
        dispatch(getUsers())
        setChange(false)
    }, [dispatch, change])

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch, userStatus])


    const statusHandler = (id, status) => {
        if (status === 'disabled') {
            Swal.fire({
                title: 'Estas seguro?',
                text: "Vas a inhabilitar a un usuario",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#7FFF00',
                cancelButtonColor: '#E90000',
                confirmButtonText: 'Inhabilitar',
                cancelButtonText: 'Cancelar'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        dispatch(changeUserStatus(id, status))
                        Swal.fire(
                            'Inhabilitado!',
                            'El usuario fue inhabilitado.',
                            'success'
                        )
                    }
                })
                setUserStatus(status)
        } else {
            Swal.fire({
                title: 'Estas seguro?',
                text: "Vas a habilitar a un usuario",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#7FFF00',
                cancelButtonColor: '#E90000',
                confirmButtonText: 'Habilitar',
                cancelButtonText: 'Cancelar'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        dispatch(changeUserStatus(id, status))
                        Swal.fire(
                            'Habilitado!',
                            'El usuario fue Habilitado!',
                            'success'
                        )
                    }
                })
                setUserStatus(status)
        }
        
    }

    const promoteHandler = (id) => {
        dispatch(promoteUser(id))
        setChange(true)
    }

    const resetPasswordHandler = (id) => {
        dispatch(resetPassword(id))
        Swal.fire(
            'Listo!',
            'Se ha reseteado la password con éxito!',
            'success'
        )
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
                    <th>Promover</th>
                    <th>Reset</th>
                    <th>Estado</th>
                </tr>
            </thead>

            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td data-label="ID">{user.id}</td>
                        <td data-label="Nombres">{user.first_name}</td>
                        <td data-label="Apellidos">{user.last_name}</td>
                        <td data-label="Correo">{user.email}</td>
                        <td data-label="Administrador" className="center-text">{(user.is_admin) ? <StatusIcon /> : <NotAdmin />}</td>
                        <td data-label="Promover" className="center-text" onClick={() => promoteHandler(user.id)}>{(user.is_admin) ? null : <PromoteIcon />}</td>
                        <td data-label="Reset" className="center-text" onClick={() => resetPasswordHandler(user.id)}>{(user.is_admin) ? null : <ResetIcon />}</td>
                        {
                        (user.status === 'active') ? 
                        <td data-label="Estado" className="center-text" onClick={() => statusHandler(user.id, 'disabled')}>{(user.is_admin) ? null : <StatusIcon/>}</td>
                        :
                        <td data-label="Estado" className="center-text" onClick={() => statusHandler(user.id, 'active')}>{(user.is_admin) ? null : <DeleteIcon/>}</td>
                        }
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default AdminUsers
