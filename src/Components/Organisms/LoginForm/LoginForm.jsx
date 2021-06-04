import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin, userGoogleLogin } from '../../../Redux/Actions/User/UserActions'
import { GoogleLogin } from 'react-google-login'
import { userLogut } from '../../../Redux/Actions/User/UserActions'

import Swal from 'sweetalert2'
import styled from 'styled-components'

const FormContainer = styled.div`
    background: var(--background-form);
    border-radius: 2em;
    margin: 2em 0 10em 0;
    height: 100%;
    padding: 2em;

    h3 {
        text-align: center;
        color: var(--pure-white);
        margin: 0 auto;
    }


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        width: 96%;
    }
`
const Form = styled.form`
    padding: 2em;
`
const Label = styled.label`
    font-size: 2em;
    color: var(--pure-white);
    margin-left: .2em;
`
const Input = styled.input`
    font-size: 1.5em;
    width: 16em;
`
const Button = styled.button`
    background: var(--background-form);
    color: var(--pure-white);
    border: .15em solid var(--default-primary);
    padding: .7em 1.5em .7em 1.5em;
    margin-top: 1em;
    font-size: 2em;
    border-radius: .3em;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    width: 10em;
    &:hover {
        box-shadow: 0 0 40px 40px var(--default-primary) inset;
    }
`
const GoogleButton = styled.button`
    background: var(--background-form);
    border: .15em solid var(--default-primary);
    border-radius: .3em;
    color: var(--pure-white);
    justify-content: center;
    padding: .2em auto;
    font-size: 2em;
    transition: box-shadow 300ms ease-in-out,
    color 300ms ease-in-out;
    width: 10em;
    &:hover {
        box-shadow: 0 0 40px 40px var(--default-primary) inset;
    }
`
const ErrorMsg = styled.p`
    color: #FF1744;
    font-size: 1.2em;
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
    padding: 1em;
    background: url('https://api.iconify.design/grommet-icons:google.svg?width=2em&height=2em') no-repeat center center;
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

    // const JWT = JSON.parse(localStorage.getItem('JWT'))

    const userError = useSelector(state => state.user.error)

    let history = useHistory()

    const dispatch = useDispatch()

    const [isTouch, setIsTouch] = useState({})

    const [error, setError] = useState('')

    const [input, setInput] = useState({
        email: "",
        password: ""
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

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (error.email || input.email === "" || error.password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar correctamente los campos!'
            })
            return
        }

        dispatch(userLogin(input))

        history.push("/home")
    }

    /// ********** Google Login **********
    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId
        const body = {
            email: result.email,
            googleId: result.googleId,
            first_name: result.givenName,
            last_name: result.familyName,
            photo: result.imageUrl
        }
        dispatch(userGoogleLogin(body, result, token))
        setTimeout(() => {
            dispatch(userLogut)
        }, 1000)
        setTimeout(() => {
            dispatch(userGoogleLogin(body, result, token))
        }, 2000)
        history.push('/home')
    }
    const googleFailure = (error) => {
        console.log('Google sign in was unsuccessful')
    }
    // ********** Google Login **********

    return (
        <FormContainer>
            <h3>Login</h3>
            <Form onSubmit={handleSubmit}>

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
                {/********** Google Login **********/}
                <ButtonContainer>
                    <GoogleLogin
                        clientId="786762591902-l8t2boesumop1ab4dbmc58j0ko9k3c7s.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <GoogleButton
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}>
                                <GoogleIcon />
                            </GoogleButton>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiepolicy="single_host_origin"
                    />
                </ButtonContainer>
                {/********** Google Login **********/}
            </Form>                        
        </FormContainer>
    )
}

export default LoginForm