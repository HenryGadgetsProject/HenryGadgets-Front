import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateReview } from '../../../Redux/Actions/Review/ReviewActions'
import Swal from 'sweetalert2'

import styled from 'styled-components'

const FormContainer = styled.div`
    height: 46em;
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

    if (!input.title) {
        error.title = 'Ingresa un titulo'
    }
    if (!input.rating) {
        error.rating = 'Ingresa una calificación'
    }
    if (!input.description) {
        error.description = 'Ingresa una descripción'
    }
    return error
}

const UserEditReviewForm = () => {

    const dispatch = useDispatch()

    const history = useHistory()
    let location = useLocation()

    const review = location.state

    const [isTouch, setIsTouch] = useState({})
    const [error, setError] = useState('')

    const [input, setInput] = useState({
        title: review.title,
        rating: review.rating,
        description: review.description,
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
        const body = {
            ...review,
            title: input.title,
            rating: input.rating,
            description: input.description,

        }

        dispatch(updateReview(review.id, body))
        Swal.fire(
            'Listo!',
            'Tu review se actualizó con éxito!',
            'success'
        )
        history.push('/user')
    }

    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }

    return (
        <FormContainer>
            <h3>Editar Review</h3>
            <Form onSubmit={handleSubmit}>
                <Divider>
                    <Item>
                        <NameIcon />
                        <Label>Titulo </Label>
                        <br />
                        <Input name='title' value={input.title} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.title && error.title ? (<ErrorMsg>{error.title}</ErrorMsg>) : null}
                    </Item>
                    <Item>
                        <ImageIcon />
                        <Label>Rating </Label>
                        <br />
                        <Input name='rating' value={input.rating} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.rating && error.rating ? (<ErrorMsg>{error.rating}</ErrorMsg>) : null}
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
                    <Button type='submit'>Editar</Button>
                </ButtonContainer>

            </Form>
        </FormContainer>
    )
}

export default UserEditReviewForm
