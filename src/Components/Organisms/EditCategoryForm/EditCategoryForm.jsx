import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../../Redux/Actions/Categories/CategoriesActions'
import Swal from 'sweetalert2'

import styled from 'styled-components'

const FormContainer = styled.div`
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
const DescriptionIcon = styled.img`
    margin-top: 2em;
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/ic:baseline-description.svg?color=white') no-repeat center center / contain;
`

// Control para Formulario
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

const EditCategoryForm = ({category}) => {

    console.log(category)

    const dispatch = useDispatch()

    const [isTouch, setIsTouch] = useState({})

    const [error, setError] = useState('')

    const categories = useSelector(state => state.category.categories)

    // Determina el último valor de la ID categories
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
        Swal.fire(
            'Listo!',
            'La categoría se ha agregado con éxito!',
            'success'
        )
    }

    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }

    return (
        <FormContainer>
            <h3>Agregar Categoría</h3>
            <Form onSubmit={handleSubmit}>

                <Divider>
                    <Item>
                        <NameIcon/>
                        <Label>Nombre </Label>
                        <br/>
                        <Input name='name' value={input.name} onBlur={handleBlur} onChange={handleChange} required></Input>
                        {isTouch.name && error.name ? (<ErrorMsg>{error.name}</ErrorMsg>) : null}
                    </Item>
                    <Item>
                        <ImageIcon/>
                        <Label>Imágen </Label>
                        <br/>
                        <Input name='photo' value={input.photo} onBlur={handleBlur} onChange={handleChange} required></Input>
                        {isTouch.photo && error.photo ? (<ErrorMsg>{error.photo}</ErrorMsg>) : null}
                    </Item>
                </Divider>

                <Item>
                    <DescriptionIcon/>
                    <Label>Descripción </Label>
                    <br/>
                    <LongInput name='description' value={input.description} onBlur={handleBlur} onChange={handleChange} required></LongInput>
                    {isTouch.description && error.description ? (<ErrorMsg>{error.description}</ErrorMsg>) : null}
                </Item>
                
                <ButtonContainer>
                    <Button type='submit'>Agregar</Button>
                </ButtonContainer>

            </Form>
        </FormContainer>
    )
}

export default EditCategoryForm