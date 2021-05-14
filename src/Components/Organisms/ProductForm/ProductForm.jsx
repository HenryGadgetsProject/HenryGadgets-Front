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
`
const Input = styled.input`
    font-size: 1.5em;
`
const Button = styled.button`
    background: crimson;
    margin-top: 1em;
    font-size: 2em;
`

const ProductForm = () => {

    const dispatch = useDispatch()

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
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProduct(input))
        alert('Producto Creado')
    }

    console.log(input)

    return (
        <FormContainer>
            <h3>Crear Producto</h3>
            <Form onSubmit={handleSubmit}>

                <Label>Nombre </Label><br/>
                <Input name='name' value={input.name} onChange={handleChange} required></Input> <br/>

                <Label>Precio </Label><br/>
                <Input name='price' value={input.price} onChange={handleChange} required></Input> <br/>

                <Label>Rating </Label><br/>
                <Input name='rating' value={input.rating} onChange={handleChange} required></Input> <br/>
                
                <Label>Imágen </Label><br/>
                <Input name='big_image' value={input.big_image} onChange={handleChange} required></Input> <br/>

                <Label>Descripción </Label><br/>
                <Input name='description' value={input.description} onChange={handleChange} required></Input> <br/>

                <Label>Activo </Label><br/>
                <Input name='is_active' value={input.is_active} onChange={handleChange} required placeholder='true/false'></Input> <br/>

                <Label>Cant. de Stock </Label><br/>
                <Input name='stock' value={input.stock} onChange={handleChange} required></Input> <br/>

                <Button type='submit'>Crear</Button>
            </Form>
        </FormContainer>
    )
}

export default ProductForm
