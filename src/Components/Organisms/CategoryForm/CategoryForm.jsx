import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../../Redux/Actions/Categories/CategoriesActions'

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

const validate = (input) => {

    let error = {}

    if (!input.name) {
    error.name = 'Ingresa un nombre'
    }
    if (!input.photo) {
    error.photo = 'Ingresa una url'
    }
    if (!input.description) {
    error.description = 'Ingresa una descripción'
    }
    return error
}

const CategoryForm = () => {

    const dispatch = useDispatch()

    const [isTouch, setIsTouch] = useState({})

    const [error, setError] = useState('')

    const categories = useSelector(state => state.category.categories)

    function getId(array) {
        return array.reduce((acumulator, current) => {
            return acumulator < current.id ? current.id : acumulator;
        }, 0) + 1;
    }

    const [input, setInput] = useState({
        id: getId(categories),
        name: "",
        photo: "",
        description: "",
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
        dispatch(addCategory(input))
        alert('Producto Creado')
    }

    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }

    return (
        <FormContainer>
            <h3>Crear Categoría</h3>
            <Form onSubmit={handleSubmit}>

                <TextContainer>
                    <Label>Nombre </Label>
                    {isTouch.name && error.name ? (<ErrorMsg>{error.name}</ErrorMsg>) : null}
                </TextContainer>
                <Input name='name' value={input.name} onBlur={handleBlur} onChange={handleChange} required></Input>

                <TextContainer>
                    <Label>Imágen </Label>
                    {isTouch.photo && error.photo ? (<ErrorMsg>{error.photo}</ErrorMsg>) : null}
                </TextContainer>
                <Input name='photo' value={input.photo} onBlur={handleBlur} onChange={handleChange} required></Input>
                    
                <TextContainer>
                    <Label>Descripción </Label>
                    {isTouch.description && error.description ? (<ErrorMsg>{error.description}</ErrorMsg>) : null}
                </TextContainer>
                <Input name='description' value={input.description} onBlur={handleBlur} onChange={handleChange} required></Input>

                <br/>

                <Button type='submit'>Crear</Button>

            </Form>
        </FormContainer>
    )
}

export default CategoryForm
