import React, { useState } from 'react'
import axios from 'axios'

import Swal from 'sweetalert2'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

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
const DurationIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bx:bx-time.svg?color=white') no-repeat center center / contain;
`
const OfferIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/bx:bxs-offer.svg?color=white') no-repeat center center / contain;
`

const validate = (input) => {
    let error = {}
    // if (!input.target) {
    //     error.target = 'Debes ingresar un objetivo'
    // }
    if (!input.targetName) {
        error.targetName = 'Selecciona una categoría'
    }
    if (!input.discount) {
        error.discount = 'Ingresa un Descuento'
    }
    if (!input.duration) {
        error.duration = 'Ingresa una duración'
    }
    return error
}

const OffersForm = () => {

    const categories = useSelector(state => state.category.categories)

    const [isTouch, setIsTouch] = useState({})

    const [error, setError] = useState('')

    const [input, setInput] = useState({
        target: "category",
        discount: "",
        duration: "",
        targetName: ""
    })

    console.log(input)



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
        if (error.targetId || error.discount || error.duration) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes completar correctamente los campos!'
            })
            return e.preventDefault()
        }
        e.preventDefault()
        Swal.fire(
            'Listo!',
            'La oferta se ha agregado con éxito!',
            'success'
        )
        const body = {
            target: input.target.toLowerCase(),
            targetName: input.targetName,
            discount: parseInt(input.discount),
            duration: parseFloat(input.duration)
        }

        console.log('BODY', body)

        // ***** El coso que hizo juan *****
        axios.post('http://localhost:3001/offer', body)
        // ***** El coso que hizo juan *****
    }

    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }

    return (
        <FormContainer>
            <h3>Agregar Ofertas</h3>
            <Form onSubmit={handleSubmit}>

                <Divider>
                    {/* <Item>
                        <NameIcon />
                        <Label>Objetivo </Label>
                        <br />
                        <Input name='target' value={input.target} onBlur={handleBlur} onChange={handleChange} placeholder="Product / Category"></Input>
                        {isTouch.target && error.target ? (<ErrorMsg>{error.target}</ErrorMsg>) : null}
                    </Item> */}
                    <Item>
                        <NameIcon />
                        <Label>Categoría </Label>
                        <br />
                        <select name="targetName" onChange={handleChange} value={input.targetName}>
                            <option value="">Seleciona una categoría</option>
                            {categories.map(cat => (<option key={cat.id} value={cat.name}>{cat.name}</option>))}
                        </select>
                        {/* <Input name='targetId' value={input.targetId} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.targetId && error.targetId ? (<ErrorMsg>{error.targetId}</ErrorMsg>) : null} */}
                    </Item>
                </Divider>
                <br />
                <Divider>
                    <Item>
                        <OfferIcon />
                        <Label>Descuento </Label>
                        <br />
                        <Input name='discount' value={input.discount} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.discount && error.discount ? (<ErrorMsg>{error.discount}</ErrorMsg>) : null}
                    </Item>
                    <Item>
                        <DurationIcon />
                        <Label>Duración </Label>
                        <br />
                        <Input name='duration' value={input.duration} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.duration && error.duration ? (<ErrorMsg>{error.duration}</ErrorMsg>) : null}
                    </Item>
                </Divider>

                <ButtonContainer>
                    <Button type='submit'>Agregar</Button>
                </ButtonContainer>

            </Form>
        </FormContainer>
    )
}

export default OffersForm
