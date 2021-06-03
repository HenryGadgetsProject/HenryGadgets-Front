import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById, updateOrder } from '../../../Redux/Actions/Order/OrderActions'
import { useHistory } from 'react-router-dom'

import Swal from 'sweetalert2'
import styled from 'styled-components'

const FormContainer = styled.div`
    height: 100%;
    padding: 2em;
    background: #424242;
    border-radius: 2em;
    h3 {
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
    text-align: center;
`

// Iconos
const StateIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/ic:baseline-pending-actions.svg?color=white') no-repeat center center / contain;
`
const PriceIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bx:bxs-dollar-circle.svg?color=white') no-repeat center center / contain;
`
const CountryIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bx:bx-world.svg?color=white') no-repeat center center / contain;
`
const CityIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/mdi:home-city-outline.svg?color=white') no-repeat center center / contain;
`
const AdressIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bx:bxs-map.svg?color=white') no-repeat center center / contain;
`
const PhoneIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/ant-design:phone-filled.svg?color=white') no-repeat center center / contain;
`

// Control para Formulario
const validate = (input) => {

    let error = {}

    if (!input.state) {
        error.state = 'Especifica un estado'
    }
    if (!input.total_price) {
        error.total_price = 'Ingresa un precio'
    }
    if (!input.country) {
        error.country = 'Ingresa una país'
    }
    if (!input.city) {
        error.city = 'Ingresa una ciudad'
    }
    if (!input.street) {
        error.street = 'Ingresa una dirección'
    }
    if (!input.phone_number) {
        error.phone_number = 'Ingresa un númuero'
    }
    return error
}

const EditOrderForm = ({ orderId }) => {

    const dispatch = useDispatch()

    const history = useHistory()

    // ********************  HACE UN LOOP AL BACKEND SIN EL USE EFFECT ******************** 
    useEffect(() => {
        const getOrder = async () => {
            await dispatch(getOrderById(parseInt(orderId)))
        }
        getOrder()
    }, [dispatch, orderId])
    // ********************  HACE UN LOOP AL BACKEND SIN EL USE EFFECT ******************** 

    const order = useSelector(state => state.order.order);

    const [isTouch, setIsTouch] = useState({})

    const [error, setError] = useState('')

    const [input, setInput] = useState({
        state: order.state,
        total_price: order.total_price,
        country: order.country,
        city: order.city,
        street: order.street,
        phone_number: order.phone_number,
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
        dispatch(updateOrder(orderId, input))
        Swal.fire(
            'Listo!',
            'La Orden se ha editado con éxito!',
            'success'
        )
        history.push('/admin/orders')
    }

    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }

    return (
        <FormContainer>
            <h3>Editar Orden</h3>
            <Form onSubmit={handleSubmit}>

                <Divider>
                    <Item>
                        <StateIcon />
                        <Label>Estado </Label>
                        <br />
                        <Input name='state' value={input.state} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.state && error.state ? (<ErrorMsg>{error.state}</ErrorMsg>) : null}
                    </Item>
                    <Item>
                        <PriceIcon />
                        <Label>Precio Total </Label>
                        <br />
                        <Input name='total_price' value={input.total_price} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.total_price && error.total_price ? (<ErrorMsg>{error.total_price}</ErrorMsg>) : null}
                    </Item>
                </Divider>

                <Divider>
                    <Item>
                        <CountryIcon />
                        <Label>País </Label>
                        <br />
                        <Input name='country' value={input.country} onBlur={handleBlur} onChange={handleChange} ></Input>
                        {isTouch.country && error.country ? (<ErrorMsg>{error.country}</ErrorMsg>) : null}
                    </Item>
                    <Item>
                        <CityIcon />
                        <Label>Ciudad </Label>
                        <br />
                        <Input name='city' value={input.city} onBlur={handleBlur} onChange={handleChange} ></Input>
                        {isTouch.city && error.city ? (<ErrorMsg>{error.city}</ErrorMsg>) : null}
                    </Item>
                </Divider>

                <Divider>
                    <Item>
                        <AdressIcon />
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
                    <Button type='submit'>Editar</Button>
                </ButtonContainer>

            </Form>
        </FormContainer>
    )
}

export default EditOrderForm