import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct, getProductsById } from '../../../Redux/Actions/Product/ProductActions'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";
import { sendStockNotification } from '../../../Redux/Actions/Product/ProductActions'

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
// const SelectIcon = styled.img`
//     height: 2em;
//     width: 2em;
//     padding: 1em;
//     background: url('https://api.iconify.design/bx:bxs-select-multiple.svg?color=white') no-repeat center center / contain;
// `

// function customStyles(theme) {
//     return {
//         ...theme,
//         colors: {
//             ...theme.colors,
//             primary: 'none',
//             primary25: '#ff1744',
//             neutral10: '#ff1744',
//             danger: 'black',
//             dangerLight: 'gray'
//         }
//     }
// }

const validate = (input) => {

    let error = {}

    if (!input.name) {
        error.name = 'Ingresa un nombre'
    }
    if (!input.price) {
        error.price = 'Ingresa un precio'
    }
    if (isNaN(input.price)) {
        error.price = 'Debe ser un n??mero'
    }
    if (!input.rating) {
        error.rating = 'Ingresa una puntaje'
    }
    if (isNaN(input.rating)) {
        error.rating = 'Debe ser un n??mero'
    }
    if (input.rating > 5) {
        error.rating = 'Debe ser entre 1-5'
    }
    if (!input.big_image) {
        error.big_image = 'Ingresa una url'
    }
    if (!input.description) {
        error.description = 'Ingresa una descripci??n'
    }
    if (!input.is_active) {
        error.is_active = 'Selecciona la disponibilidad'
    }
    // if (input.is_active !== true || input.is_active !== false) {
    //     error.is_active = 'Solo puede ser true or false'
    // }
    if (!input.stock) {
        error.stock = 'Ingresa la cantidad de Stock'
    }
    if (isNaN(input.stock)) {
        error.stock = 'Debe ser un n??mero'
    }
    if (!input.categories) {
        error.categories = 'Selecciona las categor??as'
    }
    return error
}

const EditProductForm = ({ productId }) => {

    let history = useHistory();

    const dispatch = useDispatch()

    // useEffect(() => {
    dispatch(getProductsById(productId))
    // }, [productId])


    const product = useSelector(state => state.product.product);

    //const cate = product.categories.map(cat => ({ value: cat.id, label: cat.name }))


    //const categories = useSelector((state) => state.category.categories)

    const [isTouch, setIsTouch] = useState({})

    const [error, setError] = useState('')

    //const [options] = useState(cate)

    const [input, setInput] = useState({
        id: product.id,
        name: product.name,
        price: product.price,
        rating: product.rating,
        big_image: product.big_image,
        description: product.description,
        is_active: product.is_active,
        stock: product.stock,
        categories: product.categories
    })



    // Mapeo categories para darle el formato correcto para las opciones de React-Select
    // const selectCategories = categories.map((categories) => {
    //     return { value: categories.id, label: categories.name }
    // })

    // Me hago una copia de los input para luego concatenarle los valores de React-Select. Ej: categories: [1,2,3]
    //const inputCopy = { ...input }
    //const categoriesCopy = [...options]
    //const categoriesValues = categoriesCopy.map((cat) => cat.value)

    // Y finalmente submitData ser?? mi resultado final para el /POST
    //const submitData = Object.assign({}, inputCopy, { categories: categoriesValues })

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

        // console.log(input)
        // console.log(product)


        e.preventDefault()
        if (error.name || error.price || error.big_image || error.description || error.is_active || error.stock) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes completar correctamente los campos!'
            })
            return
        }

        if (parseInt(product.stock) === 0 && parseInt(product.stock) < parseInt(input.stock)) {
            dispatch(sendStockNotification(product.id))
        }
        
        // const newInput = {...input, rating: parseInt(input.rating)}

        dispatch(updateProduct(productId, input))
        Swal.fire(
            'Listo!',
            'Tu producto fu?? agregado con ??xito!',
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
                <h3>Editar Producto</h3>
                <Form onSubmit={handleSubmit}>

                    <Divider>
                        <Item>
                            <NameIcon />
                            <Label>Nombre </Label>
                            <br />
                            <Input name='name' value={input.name} onBlur={handleBlur} onChange={handleChange}  ></Input>
                            {isTouch.name && error.name ? (<ErrorMsg>{error.name}</ErrorMsg>) : null}
                        </Item>
                        <Item>
                            <PriceIcon />
                            <Label>Precio </Label>
                            <br />
                            <Input name='price' value={input.price} onBlur={handleBlur} onChange={handleChange}  ></Input>
                            {isTouch.price && error.price ? (<ErrorMsg>{error.price}</ErrorMsg>) : null}
                        </Item>
                    </Divider>

                    <Divider>
                        <Item>
                            <RatingIcon />
                            <Label>Rating </Label>
                            <br />
                            <Input name='rating' value={input.rating} onBlur={handleBlur} onChange={handleChange} disabled  ></Input>
                            {isTouch.rating && error.rating ? (<ErrorMsg>{error.rating}</ErrorMsg>) : null}
                        </Item>
                        <Item>
                            <ImageIcon />
                            <Label>Im??gen </Label>
                            <br />
                            <Input name='big_image' value={input.big_image} onBlur={handleBlur} onChange={handleChange}  ></Input>
                            {isTouch.big_image && error.big_image ? (<ErrorMsg>{error.big_image}</ErrorMsg>) : null}
                        </Item>
                    </Divider>
                    <Divider>
                        <Item>
                            <ActiveIcon />
                            <Label>Publicaci??n Activa </Label>
                            <br />
                            <Input name='is_active' value={input.is_active} onBlur={handleBlur} onChange={handleChange} placeholder='True / False'></Input>
                            {isTouch.is_active && error.is_active ? (<ErrorMsg>{error.is_active}</ErrorMsg>) : null}
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
                            {isTouch.stock && error.stock ? (<ErrorMsg>{error.stock}</ErrorMsg>) : null}
                        </Item>
                    </Divider>

                    <Item>
                        <DescriptionIcon />
                        <Label>Descripci??n </Label>
                        <br />
                        <LongInput name='description' value={input.description} onBlur={handleBlur} onChange={handleChange}  ></LongInput>
                        {isTouch.description && error.description ? (<ErrorMsg>{error.description}</ErrorMsg>) : null}
                    </Item>


                    {/* <Item>
                        <SelectIcon />
                        <Label>Seleccionar Categor??as </Label>
                        <Select
                            className='react_select'
                            theme={customStyles}
                            options={selectCategories}
                            onChange={setOptions}
                            maxMenuHeight={85}
                            placeholder=''
                            isMulti
                            value={options}
                        />
                    </Item> */}

                    <ButtonContainer>
                        <Button type='submit'>Editar</Button>
                    </ButtonContainer>

                </Form>
            </FormContainer>
        </>
    )
}

export default EditProductForm