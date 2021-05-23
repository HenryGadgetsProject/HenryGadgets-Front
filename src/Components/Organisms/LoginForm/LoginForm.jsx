import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addCategory } from '../../../Redux/Actions/Categories/CategoriesActions'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'
import { userLogin } from '../../../Redux/Actions/User/UserActions'

const FormContainer = styled.div`
    margin-top: 12em;
    padding: 2em;
    background: #424242;
    border-radius: 2em;
    h3 {
      text-align: center;
      color: #FFFFFF;
    }
`
const Form = styled.form`
    padding: 2em;
`
const Label = styled.label`
    font-size: 2em;
    color: #FFFFFF;
    margin-left: .2em;
`
const Input = styled.input`
    font-size: 1.5em;
    width: 16em;
`
const Button = styled.button`
    background: #424242;
    color: #FFFFFF;
    border: .15em solid #ff1744;
    padding: .7em 1.5em .7em 1.5em;
    margin-top: 1em;
    font-size: 2em;
    border-radius: .3em;
    transition: box-shadow 300ms ease-in-out,
    color 300ms ease-in-out;
    &:hover {
        color: black;
        box-shadow: 0 0 40px 40px #ff1744 inset;
    }
`
const ErrorMsg = styled.p`
    color: #ff1744;
    font-size: 1.2em;
`
const Divider = styled.div`
    display: flex;
`
const Item = styled.div`
    padding-left: 2em;
    padding-right: 2em;
`
const ButtonContainer = styled.div`
    margin-top: 2em;
    text-align: center;
`

// Iconos
// const NameIcon = styled.img`
//     height: 2em;
//     width: 2em;
//     padding: 1em;
//     background: url('https://api.iconify.design/bi:pencil-fill.svg?color=white') no-repeat center center / contain;
// `
const EmailIcon = styled.img`
    margin-top: 2em;
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/dashicons:email-alt.svg?color=white') no-repeat center center / contain;
`
const PasswordIcon = styled.img`
    margin-top: 2em;
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/carbon:password.svg?color=white') no-repeat center center / contain;
`

// Control para Formulario
const validate = (input) => {

    let error = {}

    // if (!input.user) {
    //     error.user = 'Ingresa un nombre de Usuario'
    // }
    // if (input.user.length < 6) {
    //     error.user = 'Debe tener al menos 6 letras'
    // }
    if (!input.email) {
        error.email = 'Ingresa un Email'
    }
    if (!/\S+@\S+\.\S+/.test(input.email)) {
        error.email = 'Ingresa un Email válido'
    }
    if (!input.password) {
        error.password = 'Ingresa una Contraseña'
    }
    return error
}


const LoginForm = () => {

    const JWT = JSON.parse(localStorage.getItem('JWT'))
    
    const user = useSelector(state => state.user.user)
    
    let history = useHistory()
    
    const dbError = useSelector(state => state.user.error)
    
    const loading = useSelector(state => state.user.loading)
    
    const dispatch = useDispatch()
    
    const [isTouch, setIsTouch] = useState({})
    
    const [error, setError] = useState('')
    
    const [input, setInput] = useState({
        // user: "",
        email: "",
        password: ""
    })

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setError(validate({
            ...input, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        dispatch(userLogin(input))
        
        if (error.email || input.email === "" || error.password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar correctamente los campos!'
            })
            return
        }

        // setTimeout(() => {            
        //     if (dbError !== '' && loading === false) {
        //         Toast.fire({
        //             icon: 'error',
        //             title: 'Datos incorrectos'
        //         })
        //         return
        //     } 
            Toast.fire({
                icon: 'success',
                title: 'Te has logeado correctamente!'
            })
            history.push("/home");              
        // },1000)
        
    }

    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }

    return (
        <FormContainer>
        <h3>Login</h3>
            <Form onSubmit={handleSubmit}>

                <Divider>
                    {/* <Item>
                        <NameIcon />
                        <Label>Nombre de Usuario </Label>
                        <br />
                        <Input name='user' value={input.user} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.user && error.user ? (<ErrorMsg>{error.user}</ErrorMsg>) : null}
                    </Item> */}
                </Divider>

                <Item>
                    <EmailIcon />
                    <Label>Dirección de Email </Label>
                    <br />
                    <Input name='email' value={input.email} onBlur={handleBlur} onChange={handleChange}></Input>
                    {isTouch.email && error.email ? (<ErrorMsg>{error.email}</ErrorMsg>) : null}
                </Item>

                <Item>
                    <PasswordIcon />
                    <Label>Contraseña </Label>
                    <br />
                    <Input type='password' name='password' value={input.password} onBlur={handleBlur} onChange={handleChange}></Input>
                    {isTouch.password && error.password ? (<ErrorMsg>{error.password}</ErrorMsg>) : null}
                </Item>

                <ButtonContainer>
                    <Button type='submit'>Ingresar</Button>
                </ButtonContainer>

            </Form>
        </FormContainer>
    )
}

export default LoginForm