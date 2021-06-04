import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../../Redux/Actions/Categories/CategoriesActions'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

const FormContainer = styled.div`
    background: var(--background-form);
    border-radius: 2em;
    height: 100%;
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
        width: 96%;

        input {
            margin-bottom: .5em;
        }
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
const LongInput = styled.input`
    font-size: 1.5em;
    width: 34.7em;


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
        font-size: 1.5em !important;
        width: 16em !important;
    }
`
const Button = styled.button`
    background: var(--background-form);
    color: var(--pure-white);
    border: .15em solid var(--default-primary);
    padding: 0.7em 1.5em 0.7em 1.5em;
    margin-top: 1em;
    font-size: 2em;
    border-radius: .3em;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
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

const CategoryForm = () => {

    let history = useHistory();

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
        if (error.name || error.photo || error.description || input.name === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes completar correctamente los campos!'
            })
            return e.preventDefault()
        }
        e.preventDefault()
        dispatch(addCategory(input))
        Swal.fire(
            'Listo!',
            'La categoría se ha agregado con éxito!',
            'success'
        )
        history.push("/admin/categories");
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
                        <NameIcon />
                        <Label>Nombre </Label>
                        <br />
                        <Input name='name' value={input.name} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.name && error.name ? (<ErrorMsg>{error.name}</ErrorMsg>) : null}
                    </Item>
                    <Item>
                        <ImageIcon />
                        <Label>Imágen </Label>
                        <br />
                        <Input name='photo' value={input.photo} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.photo && error.photo ? (<ErrorMsg>{error.photo}</ErrorMsg>) : null}
                    </Item>
                </Divider>

                <Item>
                    <DescriptionIcon />
                    <Label>Descripción </Label>
                    <br />
                    <LongInput name='description' value={input.description} onBlur={handleBlur} onChange={handleChange}></LongInput>
                    {isTouch.description && error.description ? (<ErrorMsg>{error.description}</ErrorMsg>) : null}
                </Item>

                <ButtonContainer>
                    <Button type='submit'>Agregar</Button>
                </ButtonContainer>

            </Form>
        </FormContainer>
    )
}

export default CategoryForm
