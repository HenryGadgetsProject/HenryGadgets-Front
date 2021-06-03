import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { addCategory } from '../../../Redux/Actions/Categories/CategoriesActions'
//import Swal from 'sweetalert2'
//import { useHistory } from 'react-router-dom'


import styled from 'styled-components'

//import axios from 'axios'
import { createOrder, sendMail } from '../../../Redux/Actions/Cart/CartActions'

const FormContainer = styled.div`
    height: 100%;
    margin-top: 10em;
    padding: 2em;
    background: #424242;
    border-radius: 2em;
    h3 {
      text-align: center;
      color: #FFFFFF;
    }
    margin-bottom: 10em;
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
    margin: 1em 0 1em 0;
    font-size: 1.5em;
    width: 16em;
`
// const LongInput = styled.input`
//     font-size: 1.5em;
//     width: 34.7em;
// `
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
    &:disabled {
        background: gray;
        border: .15em solid white;
    }
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
const PhoneIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/ant-design:phone-filled.svg?color=white') no-repeat center center / contain;
`
const CityIcon = styled.img`
    height: 2em;
    width: 2em;
    padding: 1em;
    background: url('https://api.iconify.design/mdi:home-city-outline.svg?color=white') no-repeat center center / contain;
`

// Control para Formulario
const validate = (input) => {

    let error = {}

    if (!input.street) {
        error.street = 'Ingresa una dirección'
    }
    if (!input.country) {
        error.country = 'Ingresa un país'
    }
    if (!input.city) {
        error.city = 'Ingresa una ciudad'
    }
    if (!input.phone_number) {
        error.phone_number = 'Ingresa un número de contacto'
    }
    return error
}

const OrderForm = ({ total }) => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.user)
    // const orderId = useSelector(state => state.cart.orderId)

    const cart = useSelector(state => state.cart.cartList)



    //const history = useHistory()


    const [isTouch, setIsTouch] = useState({})

    const [error, setError] = useState('')

    //const [process, setProcess] = useState('false')

    //const [payment, setPayment] = useState('false')





    const [input, setInput] = useState({
        street: "",
        country: "",
        city: "",
        phone_number: "",
    })


    const client = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
    }

    const body1 = {
        products: cart,
        client: client,
        total: total
    }

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setError(validate({
            ...input, [e.target.name]: e.target.value
        }))
    }

    const handleBlur = (e) => {
        setIsTouch({
            ...isTouch,
            [e.target.name]: true
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()



        //setProcess('true')

        const body = { ...input, total_price: total }

        dispatch(createOrder(user.id, body))
        dispatch(sendMail(body1, 'buy-thanks'))

        /////////
        // Swal.fire({
        //     title: 'Tu compra se enviará a la siguiente dirección',
        //     text: 'Información proporcionada por el usuario',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Confirmar',
        //     cancelButtonText: 'Cancelar'
        // })
        //     .then((result) => {
        //         if (result.isConfirmed) {
        //             setPayment('true')

        //             console.log('entro a processing')
        //             console.log(orderId)
        //             axios.put(`http://localhost:3001/orders/admin/${orderId}/processing`)
        //                 .then(response => {
        //                     console.log(response.data)
        //                 })
        //             Swal.fire(
        //                 'Ahora puedes proceder con tu pago',
        //                 'success'
        //             )
        //             history.push('/confirmation')
        //         } else {
        //             console.log('setProcess -> false, limpiar back, y modificar state en redux');
        //         }
        //     })
        /////////
    }


    // const handleAdressProcessing = () => {

    //     setPayment('true')

    //     console.log('entro a processing')
    //     console.log(orderId)
    //     axios.put(`http://localhost:3001/orders/admin/${orderId}/processing`)
    //         .then(response => {
    //             console.log(response.data)

    //         })

    // }

    // const handlePayment = () => {

    //     const order = {
    //         description: "Henry Gadgets",
    //         price: total,
    //         quantity: 1
    //     }

    //     axios.post(`http://localhost:3001/payment/${orderId}`, order)
    //         .then(response => window.open(response.data.url))

    // }


    return (
        <FormContainer>
            <h3>Completa tus datos de envío</h3>
            <Form onSubmit={handleSubmit}>

                <Divider>
                    <Item>
                        <ImageIcon />
                        <Label>País </Label>
                        <br />
                        <Input name='country' value={input.country} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.country && error.country ? (<ErrorMsg>{error.country}</ErrorMsg>) : null}
                    </Item>
                    <Item>
                        <CityIcon />
                        <Label>Ciudad </Label>
                        <br />
                        <Input name='city' value={input.city} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.city && error.city ? (<ErrorMsg>{error.city}</ErrorMsg>) : null}
                    </Item>
                </Divider>

                <Divider>
                    <Item>
                        <NameIcon />
                        <Label>Dirección </Label>
                        <br />
                        <Input name='street' value={input.street} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.street && error.street ? (<ErrorMsg>{error.street}</ErrorMsg>) : null}
                    </Item>
                    <Item>
                        <PhoneIcon />
                        <Label>Teléfono </Label>
                        <br />
                        <Input name='phone_number' value={input.phone_number} onBlur={handleBlur} onChange={handleChange}></Input>
                        {isTouch.phone_number && error.phone_number ? (<ErrorMsg>{error.phone_number}</ErrorMsg>) : null}
                    </Item>

                </Divider>


                <ButtonContainer>
                    <Button type='submit'>Generar Pago</Button>
                </ButtonContainer>

            </Form>

            {/* <ButtonContainer>
                <Button onClick={handleAdressProcessing}>Procesar</Button>
            </ButtonContainer>

            <ButtonContainer>
                <Button onClick={handlePayment}>Pagar</Button>
            </ButtonContainer> */}

        </FormContainer>
    )
}

export default OrderForm