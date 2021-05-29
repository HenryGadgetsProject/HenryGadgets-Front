import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getId } from '../../../Helpers/getId'
import { addUser } from '../../../Redux/Actions/User/UserActions'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'

import Swal from 'sweetalert2'
import styled from 'styled-components'

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
// const Divider = styled.div`
//     display: flex;
// `
const Item = styled.div`
    padding-left: 2em;
    padding-right: 2em;
`
const ButtonContainer = styled.div`
    margin-top: 2em;
    text-align: center;
`

// Iconos
const NameIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bi:pencil-fill.svg?color=white') no-repeat center center / contain;
`
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
const GoogleIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/grommet-icons:google.svg') no-repeat center center / contain;
`

// Control para Formulario
const validate = (input, reType) => {

    let error = {}

    if (!input.first_name) {
        error.first_name = 'Ingresa un nombre'
    }
    if (!input.last_name) {
        error.last_name = 'Ingresa un apellido'
    }
    if (!input.email) {
        error.email = 'Ingresa un Email'
    }
    if (!/\S+@\S+\.\S+/.test(input.email)) {
        error.email = 'Ingresa un Email válido'
    }
    if (input.password.length < 6) {
        error.password = 'Debe contener al menos 6 caracteres'
    }
    if (!input.password) {
        error.password = 'Ingresa una Contraseña'
    }
    return error
}

const RegisterForm = () => {

    const users = useSelector(state => state.user.users)

    const dispatch = useDispatch()
    
    const history = useHistory()

    const [isTouch, setIsTouch] = useState({})

    const [error, setError] = useState('')

    const [input, setInput] = useState({
        id: getId(users),
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })
    
    
    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }

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
        if (error.first_name || error.email || input.first_name === "" || input.email === "" || error.password || error.last_name) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes completar correctamente los campos!'
            })
            return
        }
        dispatch(addUser(input))
        Swal.fire(
            'Listo!',
            'Tu cuenta se ha registrado con éxito!',
            'success'
        )
        history.push('/login')
    }

    /// ********** Google Register **********
    const googleSuccess = async(res) => {
        const result = res?.profileObj
        const body = {
            email: result.email,
            googleId: result.googleId,
            first_name: result.givenName,
            last_name: result.familyName
        }
        console.log(body)
        axios.post('http://localhost:3001/auth/googleSignup', body)
            .then(
                Swal.fire(
                    'Listo!',
                    'Tu cuenta se ha registrado con éxito!',
                    'success'
                )
            )
            .catch(
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo malo pasó...'
                })
            )
    }
    const googleFailure = (error) => {
        console.log(error)
        console.log('Google sign in was unsuccessful')
    }
    // ********** Google Register **********

    return (
        <FormContainer>
            <h3>Registrar Cuenta</h3>
            <Form onSubmit={handleSubmit}>
                <Item>
                    <NameIcon />
                    <Label>Nombre </Label>
                    <br />
                    <Input name='first_name' value={input.first_name} onBlur={handleBlur} onChange={handleChange}></Input>
                    {isTouch.first_name && error.first_name ? (<ErrorMsg>{error.first_name}</ErrorMsg>) : null}
                </Item>
                <br />
                <Item>
                    <NameIcon />
                    <Label>Apellido </Label>
                    <br />
                    <Input name='last_name' value={input.last_name} onBlur={handleBlur} onChange={handleChange}></Input>
                    {isTouch.last_name && error.last_name ? (<ErrorMsg>{error.last_name}</ErrorMsg>) : null}
                </Item>
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
                    <Button type='submit'>Registrarse</Button>
                </ButtonContainer>

            </Form>

            {/********** Google Register **********/}
            <ButtonContainer>
                <GoogleLogin
                    clientId="786762591902-l8t2boesumop1ab4dbmc58j0ko9k3c7s.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <Button 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled}>
                            <GoogleIcon/>
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiepolicy="single_host_origin"
                />
            </ButtonContainer>
            {/********** Google Register **********/}

        </FormContainer>
    )
}

export default RegisterForm