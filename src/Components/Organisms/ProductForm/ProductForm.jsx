import React, { useState } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../../Redux/Actions/Product/ProductActions'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

import styled from 'styled-components'

const FormContainer = styled.div`
    height: 100%;
    margin: 2em 0 10em 0;
    padding: 2em;
    background: var(--background-form);
    border-radius: 2em;

    h3 {
        text-align: center;
        color: var(--pure-white);
        margin: 0 auto;
    }


    ${'' /* =================================================
    SMALL - CHECK TABLET VERTICAL OR MOBILE VIEW 992px
    ===================================================== */}
    @media(max-width: 992px) {
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
    border: 0.15em solid var(--default-primary);
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
const PriceIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/entypo:price-tag.svg?color=white') no-repeat center center / contain;
`
const RatingIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/ant-design:star-filled.svg?color=white') no-repeat center center / contain;
`
const ImageIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bi:image-fill.svg?color=white') no-repeat center center / contain;
`
const ActiveIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bi:check-circle-fill.svg?color=white') no-repeat center center / contain;
`
const StockIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bi:stack.svg?color=white') no-repeat center center / contain;
`
const DescriptionIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/ic:baseline-description.svg?color=white') no-repeat center center / contain;
`
const SelectIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bx:bxs-select-multiple.svg?color=white') no-repeat center center / contain;
`

function customStyles(theme) {
    return {
        ...theme,
        colors: {
            ...theme.colors,
            primary: 'none',
            primary25: '#FF1744',
            neutral10: '#FF1744',
            danger: 'black',
            dangerLight: 'gray'
        }
    }
}

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
    if (isNaN(input.rating)) {
        error.rating = 'Debe ser un número'
    }
    if (input.rating > 5) {
        error.rating = 'Debe ser entre 1-5'
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

    let history = useHistory();

    const dispatch = useDispatch()

    const categories = useSelector((state) => state.category.categories)

    const [isTouch, setIsTouch] = useState({})

    const [error, setError] = useState('')

    const [options, setOptions] = useState('')

    const [input, setInput] = useState({
        name: "",
        price: "",
        rating: "",
        big_image: "",
        description: "",
        is_active: "",
        stock: "",
    })

    // Mapeo categories para darle el formato correcto para las opciones de React-Select
    const selectCategories = categories.map((categories) => {
        return { value: categories.id, label: categories.name }
    })

    // Me hago una copia de los input para luego concatenarle los valores de React-Select. Ej: categories: [1,2,3]
    const inputCopy = { ...input }
    const categoriesCopy = [...options]
    const categoriesValues = categoriesCopy.map((cat) => cat.value)

    // Y finalmente submitData será mi resultado final para el /POST
    const submitData = Object.assign({}, inputCopy, { categories: categoriesValues })

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
        setError(validate({
            ...input, [e.target.name]: e.target.value
        }))
        if (error.name || error.price || error.rating || error.big_image || error.description || error.is_active || error.stock || input.name === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes completar correctamente los campos!'
            })
            return
        }
        if (submitData.categories.length > 2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Solo puedes seleccionar 2 Categorías como máximo!'
            })
            return
        }
        dispatch(addProduct(submitData))
        Swal.fire(
            'Listo!',
            'Tu producto fué agregado con éxito!',
            'success'
        )
        history.push("/admin/products");
    }

    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }

    return (
        <>
            <FormContainer>
                <h3>Agregar Producto</h3>
                <Form onSubmit={handleSubmit}>

                    <Divider>
                        <Item>
                            <NameIcon />
                            <Label>Nombre </Label>
                            <br />
                            <Input name='name' value={input.name} onBlur={handleBlur} onChange={handleChange}  ></Input>
                            {isTouch.name && error.name ? (<ErrorMsg>{error.name}</ErrorMsg>) : <p></p>}
                        </Item>
                        <Item>
                            <PriceIcon />
                            <Label>Precio </Label>
                            <br />
                            <Input name='price' value={input.price} onBlur={handleBlur} onChange={handleChange}  ></Input>
                            {isTouch.price && error.price ? (<ErrorMsg>{error.price}</ErrorMsg>) : <p></p>}
                        </Item>
                    </Divider>

                    <Divider>
                        <Item>
                            <RatingIcon />
                            <Label>Rating </Label>
                            <br />
                            <Input name='rating' value={input.rating} onBlur={handleBlur} onChange={handleChange}  ></Input>
                            {isTouch.rating && error.rating ? (<ErrorMsg>{error.rating}</ErrorMsg>) : <p></p>}
                        </Item>
                        <Item>
                            <ImageIcon />
                            <Label>Imágen </Label>
                            <br />
                            <Input name='big_image' value={input.big_image} onBlur={handleBlur} onChange={handleChange}  ></Input>
                            {isTouch.big_image && error.big_image ? (<ErrorMsg>{error.big_image}</ErrorMsg>) : <p></p>}
                        </Item>
                    </Divider>
                    <Divider>
                        <Item>
                            <ActiveIcon />
                            <Label>Publicación Activa </Label>
                            <br />
                            <Input name='is_active' value={input.is_active} onBlur={handleBlur} onChange={handleChange}   placeholder='True / False'></Input>
                            {isTouch.is_active && error.is_active ? (<ErrorMsg>{error.is_active}</ErrorMsg>) : <p></p>}
                            {/* <select onChange={handleChange} value={input.is_active}>
                            <option value="true">Activa</option>
                            <option value="false">Oculta</option>
                        </select> */}
                        </Item>
                        <Item>
                            <StockIcon />
                            <Label>Cant. de Stock </Label>
                            <br />
                            <Input name='stock' value={input.stock} onBlur={handleBlur} onChange={handleChange}  ></Input>
                            {isTouch.stock && error.stock ? (<ErrorMsg>{error.stock}</ErrorMsg>) : <p></p>}
                        </Item>
                    </Divider>

                    <Item>
                        <DescriptionIcon />
                        <Label>Descripción </Label>
                        <br />
                        <LongInput name='description' value={input.description} onBlur={handleBlur} onChange={handleChange}  ></LongInput>
                        {isTouch.description && error.description ? (<ErrorMsg>{error.description}</ErrorMsg>) : <p></p>}
                    </Item>


                    <Item>
                        <SelectIcon />
                        <Label>Seleccionar Categorías </Label>
                        <Select
                            className='react_select'
                            theme={customStyles}
                            options={selectCategories}
                            onChange={setOptions}
                            maxMenuHeight={85}
                            placeholder=''
                            isMulti
                        />
                    </Item>

                    <ButtonContainer>
                        <Button type='submit'>Agregar</Button>
                    </ButtonContainer>

                </Form>
            </FormContainer>
        </>
    )
}

export default ProductForm