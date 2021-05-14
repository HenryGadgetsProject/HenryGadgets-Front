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
`
const Input = styled.input`
    font-size: 1.5em;
`
const Button = styled.button`
    background: crimson;
    margin-top: 1em;
    font-size: 2em;
`

const CategoryForm = () => {

    const dispatch = useDispatch()

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
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCategory(input))
        alert('Producto Creado')
    }

    console.log(input)

    return (
        <FormContainer>
            <h3>Crear Categoría</h3>
            <Form onSubmit={handleSubmit}>
                <div>

                <Label>Nombre </Label><br/>
                <Input name='name' value={input.name} onChange={handleChange} required></Input>
                </div>
                <div>

                <Label>Imágen </Label><br/>
                <Input name='photo' value={input.photo} onChange={handleChange} required></Input>
                </div>

                <div>
                <Label>Descripción </Label><br/>
                <Input name='description' value={input.description} onChange={handleChange} required></Input>

                </div>

                <Button type='submit'>Crear</Button>

            </Form>
        </FormContainer>
    )
}

export default CategoryForm
