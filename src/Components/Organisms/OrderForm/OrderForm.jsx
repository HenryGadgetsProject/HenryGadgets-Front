import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../../Redux/Actions/Categories/CategoriesActions'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

import axios from 'axios'

const FormContainer = styled.div`
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
    margin: 1em 0 1em 0;
    font-size: 1.5em;
    width: 16em;
`
const LongInput = styled.input`
    font-size: 1.5em;
    width: 34.7em;
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
    text-align: center;
`

// Iconos
const NameIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bi:pencil-fill.svg?color=white') no-repeat center center / contain;
`
const ImageIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bi:image-fill.svg?color=white') no-repeat center center / contain;
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

    const user = useSelector(state => state.user.user)

    const dispatch = useDispatch()

    const [isTouch, setIsTouch] = useState({})

    const [error, setError] = useState('')

    const [orderId, setOrderId] = useState(null)

    const [input, setInput] = useState({
        street: "",
        country: "",
        city: "",
        phone_number: "",
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

        const body = { ...input, state: 'created', total_price: total }
        axios.put(`http://localhost:3001/orders/orders/${user.id}`, body)
            .then(response => setOrderId(response.data.id))

        console.log(orderId)


        console.log(JSON.stringify({ ...input, state: 'created', total_price: total }, null, 3))
        // Swal.fire(
        //     'Listo!',
        //     'La categoría se ha agregado con éxito!',
        //     'success'
        // )
    }

    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }



    return (
        <FormContainer>
            <h3>Completa tus Datos</h3>
            <Form onSubmit={handleSubmit}>

                <Divider>
                    <Item>
                        <ImageIcon />
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
                    <Button type='submit'>Siguiente</Button>
                </ButtonContainer>

            </Form>
        </FormContainer>
    )
}

export default OrderForm