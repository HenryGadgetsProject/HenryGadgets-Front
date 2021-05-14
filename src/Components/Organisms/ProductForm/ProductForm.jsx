import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../Redux/Actions/Product/ProductActions'

import styled from 'styled-components'

const FormContainer = styled.div`
    padding: 2em;
    background: #424242;
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
    margin-right: .2em;
`
const Input = styled.input`
    font-size: 1.5em;
`
const Button = styled.button`
    background: crimson;
    margin-top: 1em;
    font-size: 2em;
`
const ErrorMsg = styled.p`
    color: #ff1744;
    font-size: 1.2em;
`
const TextContainer = styled.div`
    display: flex;
`
const Divider = styled.div`
    display: flex;
`

const validate = (input) => {

    let error = {}

    if (!input.name) {
    error.name = 'Ingresa un nombre'
    }
    if (!input.price) {
    error.price = 'Ingresa un precio'
    }
    if (isNaN(input.price)) {
    error.price = 'Debe ser un número'
    }
    if (!input.rating) {
    error.rating = 'Ingresa una puntaje'
    }
    if (!input.big_image) {
    error.big_image = 'Ingresa una url'
    }
    if (!input.description) {
    error.description = 'Ingresa una descripción'
    }
    if (!input.is_active) {
    error.is_active = 'Selecciona la disponibilidad'
    }
    if (!input.stock) {
    error.stock = 'Ingresa la cantidad de Stock'
    }
    if (isNaN(input.stock)) {
    error.stock = 'Debe ser un número'
    }
    if (!input.categories) {
    error.categories = 'Selecciona las categorías'
    }
    return error
}

const ProductForm = () => {

    const dispatch = useDispatch()

    const [isTouch, setIsTouch] = useState({})

    const [error, setError] = useState('')

    const [input, setInput] = useState({
        name: "",
        price: "",
        rating: "",
        big_image: "",
        description: "",
        is_active: "",
        stock: "",
        categories: [1]
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
        dispatch(addProduct(input))
        alert('Producto Creado')
    }

    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }

    return (
        <>
        <h3>Crear Producto</h3>
        <FormContainer>
            <Form onSubmit={handleSubmit}>

                <Divider>
                <TextContainer>
                    <Label>Nombre </Label>
                    {isTouch.name && error.name ? (<ErrorMsg>{error.name}</ErrorMsg>) : null}
                </TextContainer>
                <Input name='name' value={input.name} onBlur={handleBlur} onChange={handleChange} required></Input>

                <TextContainer>
                    <Label>Precio </Label>
                    {isTouch.price && error.price ? (<ErrorMsg>{error.price}</ErrorMsg>) : null}
                </TextContainer>
                <Input name='price' value={input.price} onBlur={handleBlur} onChange={handleChange} required></Input>
                </Divider>
                
                <Divider>
                <TextContainer>
                    <Label>Rating </Label>
                    {isTouch.rating && error.rating ? (<ErrorMsg>{error.rating}</ErrorMsg>) : null}
                </TextContainer>
                <Input name='rating' value={input.rating} onBlur={handleBlur} onChange={handleChange} required></Input>


                <TextContainer>
                    <Label>Imágen </Label>
                    {isTouch.big_image && error.big_image ? (<ErrorMsg>{error.big_image}</ErrorMsg>) : null}
                </TextContainer>
                <Input name='big_image' value={input.big_image} onBlur={handleBlur} onChange={handleChange} required></Input>
                </Divider>

                <TextContainer>
                    <Label>Activo </Label>
                    {isTouch.is_active && error.is_active ? (<ErrorMsg>{error.is_active}</ErrorMsg>) : null}
                </TextContainer>
                <Input name='is_active' value={input.is_active} onBlur={handleBlur} onChange={handleChange} required placeholder='true/false'></Input>

                <TextContainer>
                    <Label>Cant. de Stock </Label>
                    {isTouch.stock && error.stock ? (<ErrorMsg>{error.stock}</ErrorMsg>) : null}
                </TextContainer>
                <Input name='stock' value={input.stock} onBlur={handleBlur} onChange={handleChange} required></Input>
                
                <TextContainer>
                    <Label>Descripción </Label>
                    {isTouch.description && error.description ? (<ErrorMsg>{error.description}</ErrorMsg>) : null}
                </TextContainer>
                <Input name='description' value={input.description} onBlur={handleBlur} onChange={handleChange} required></Input>

                <br/>

                <Button type='submit'>Crear</Button>
                
            </Form>
        </FormContainer>
        </>
    )
}

export default ProductForm
