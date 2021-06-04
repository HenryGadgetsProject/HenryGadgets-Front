import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBranch } from '../../../Redux/Actions/Branch/BranchesActions'
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
    if (!input.address) {
        error.address = 'Ingresa una dirección'
    }
    if (!input.atention) {
        error.atention = 'Ingresa datos de atención'
    }
    if (!input.lat) {
        error.lat = 'Ingresa una latitud'
    }
    if (!input.lng) {
        error.lng = 'Ingresa una longitud'
    }
    return error
}

const BranchForm = () => {

    let history = useHistory();

    const dispatch = useDispatch()

    const [isTouch, setIsTouch] = useState({})

    const [error, setError] = useState('')

    const branches = useSelector(state => state.branch.branches)

    // Determina el último valor de la ID categories
    function getId(array) {
        return array.reduce((acumulator, current) => {
            return acumulator < current.id ? current.id : acumulator;
        }, 0) + 1;
    }

    const [input, setInput] = useState({
        id: getId(branches),
        name: "",
        address: "",
        atention: "",
        lat: 0.00,
        lng: 0.00
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
        if (error.name || error.address || error.attention || error.lat || input.lng || input.name === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes completar correctamente los campos!'
            })
            return e.preventDefault()
        }
        e.preventDefault()
        const body = {
            name: input.name,
            address: input.address,
            atention: input.atention,
            latitud: parseFloat(input.lat),
            longitud: parseFloat(input.lng)
        }
        dispatch(addBranch(body))
        Swal.fire(
            'Listo!',
            'La sucursal se ha agregada con éxito!',
            'success'
        )
        history.push("/admin/branches");
    }

    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }

    return (
        <FormContainer>
            <h3>Agregar Sucursal</h3>
            <Form onSubmit={handleSubmit}>
                <Item>
                    <NameIcon />
                    <Label>Nombre </Label>
                    <br />
                    <LongInput name='name' value={input.name} onBlur={handleBlur} onChange={handleChange}></LongInput>
                    {isTouch.name && error.name ? (<ErrorMsg>{error.name}</ErrorMsg>) : null}
                </Item>
                <Item>
                    <DescriptionIcon />
                    <Label>Dirección</Label>
                    <br />
                    <LongInput name='address' value={input.address} onBlur={handleBlur} onChange={handleChange}></LongInput>
                    {isTouch.address && error.address ? (<ErrorMsg>{error.address}</ErrorMsg>) : null}
                </Item>
                <Item>
                    <DescriptionIcon />
                    <Label>Atención</Label>
                    <br />
                    <LongInput name='atention' value={input.atention} onBlur={handleBlur} onChange={handleChange}></LongInput>
                    {isTouch.atention && error.atention ? (<ErrorMsg>{error.atention}</ErrorMsg>) : null}
                </Item>
                <Item>
                    <DescriptionIcon />
                    <Label>Latitud</Label>
                    <br />
                    <LongInput name='lat' value={input.lat} onBlur={handleBlur} onChange={handleChange}></LongInput>
                    {isTouch.lat && error.lat ? (<ErrorMsg>{error.lat}</ErrorMsg>) : null}
                </Item>
                <Item>
                    <DescriptionIcon />
                    <Label>Longitud</Label>
                    <br />
                    <LongInput name='lng' value={input.lng} onBlur={handleBlur} onChange={handleChange}></LongInput>
                    {isTouch.lng && error.lng ? (<ErrorMsg>{error.lng}</ErrorMsg>) : null}
                </Item>

                <ButtonContainer>
                    <Button type='submit'>Agregar</Button>
                </ButtonContainer>

            </Form>
        </FormContainer>
    )
}

export default BranchForm
