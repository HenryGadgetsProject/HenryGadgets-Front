import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, sendMail } from '../../../Redux/Actions/Cart/CartActions'

import Swal from 'sweetalert2'
import styled from 'styled-components'

const FormContainer = styled.div`
    background: var(--background-form);
    border-radius: 2em;
    height: 50em;
    margin: 2em 0 10em 0;
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
        height: 60em;
        margin: 2em auto;
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
    margin: 1em 0 1em 0;
    font-size: 1.5em;
    width: 16em;
`
// const LongInput = styled.input`
//     font-size: 1.5em;
//     width: 34.7em;
// `
const Button = styled.button`
    background: var(--background-form);
    color: var(--pure-white);
    border: 0.15em solid var(--default-primary);
    padding: 0.7em 1.5em 0.7em 1.5em;
    margin-top: 1em;
    font-size: 2em;
    border-radius: .3em;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    &:disabled {
        background: var(--pure-gray);
        border: .15em solid var(--pure-white);
    }
    &:hover {
        box-shadow: 0 0 40px 40px var(--default-primary) inset;
    }
`
const ErrorMsg = styled.p`
    color: #FF1744;
    font-size: 1.2em;
`
const Divider = styled.div`
    display: flex;


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        flex-direction: column;
    }
`
const Item = styled.div`
    padding-left: 2em;
    padding-right: 2em;
`
const ButtonContainer = styled.div`
    text-align: center;
`

// Iconos
const NameIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bi:pencil-fill.svg?color=white') no-repeat center center / contain;
`
const CountryIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bx:bx-world.svg?color=white') no-repeat center center / contain;
`
const PhoneIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/ant-design:phone-filled.svg?color=white') no-repeat center center / contain;
`
const CityIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/mdi:home-city-outline.svg?color=white') no-repeat center center / contain;
`

// Control para Formulario
const validate = (input) => {

    let error = {}

    if (!input.street) {
        error.street = 'Ingresa una dirección'
    }
    if (!input.country) {
        error.country = 'Ingresa un país'
    }
    if (!input.city) {
        error.city = 'Ingresa una ciudad'
    }
    if (!input.phone_number) {
        error.phone_number = 'Ingresa un número de contacto'
    }
    return error
}

const OrderForm = ({ total }) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user.user)
    const cart = useSelector(state => state.cart.cartList)

    const [isTouch, setIsTouch] = useState({})
    const [error, setError] = useState('')

    const [input, setInput] = useState({
        street: "",
        country: "",
        city: "",
        phone_number: "",
    })

    const client = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
    }

    const body1 = {
        products: cart,
        client: client,
        total: total,
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

    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }

    const handleSubmit = (e) => {
        if (error.street || error.country || error.city || error.phone_number || input.street === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes completar todos los campos!'
            })
            return e.preventDefault()
        }
        e.preventDefault()
        const body = { ...input, total_price: total }
        dispatch(createOrder(user.id, body))
        dispatch(sendMail(body1, 'buy-thanks'))
    }

    return (
        <FormContainer>
            <h3>Completa tus datos de envío</h3>
            <Form onSubmit={handleSubmit}>

                <Divider>
                    <Item>
                        <CountryIcon />
                        <Label>País </Label>
                        <br />
                        <Input name='country' value={input.country} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.country && error.country ? (<ErrorMsg>{error.country}</ErrorMsg>) : null}
                    </Item>
                    <Item>
                        <CityIcon />
                        <Label>Ciudad </Label>
                        <br />
                        <Input name='city' value={input.city} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.city && error.city ? (<ErrorMsg>{error.city}</ErrorMsg>) : null}
                    </Item>
                </Divider>

                <Divider>
                    <Item>
                        <NameIcon />
                        <Label>Dirección </Label>
                        <br />
                        <Input name='street' value={input.street} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.street && error.street ? (<ErrorMsg>{error.street}</ErrorMsg>) : null}
                    </Item>
                    <Item>
                        <PhoneIcon />
                        <Label>Teléfono </Label>
                        <br />
                        <Input name='phone_number' value={input.phone_number} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.phone_number && error.phone_number ? (<ErrorMsg>{error.phone_number}</ErrorMsg>) : null}
                    </Item>

                </Divider>


                <ButtonContainer>
                    <Button type='submit'>Generar Pago</Button>
                </ButtonContainer>

            </Form>

            {/* <ButtonContainer>
                <Button onClick={handleAdressProcessing}>Procesar</Button>
            </ButtonContainer>

            <ButtonContainer>
                <Button onClick={handlePayment}>Pagar</Button>
            </ButtonContainer> */}

        </FormContainer>
    )
}

export default OrderForm