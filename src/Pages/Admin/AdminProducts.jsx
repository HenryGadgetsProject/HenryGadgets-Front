import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import StarRatings from 'react-star-ratings'
import Swal from 'sweetalert2'
import Table from '../../Components/Atoms/Table'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { deleteProducts } from '../../Redux/Actions/Product/ProductActions'

import FilterBy from '../../Components/Organisms/FilterBy'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsByCategoryName, getProductsByStock, getProductsByIsActive } from '../../Redux/Actions/Product/ProductActions'

import styled from "styled-components"

const NumbersContainer = styled.ul`
    list-style: none;
    display: flex;
    align-self: center;
    background: var(--pure-white);
`
const PageNumbers = styled.li`
    font-size: 1.2em;
    font-weight: 500;
    text-align: center;
    padding: 1.6em;
    border: .1em solid var(--divider);
    cursor: pointer;
    transition: .5s;
    &:hover {
        background-color: #ff616f;
    }
    &.active {
        font-weight: 700;
        background-color: #ff1744;
        color: black;
    }
`
const Button = styled.button`
    font-size: 1.2em;
    text-align: center;
    padding: 1.6em;
    background-color: transparent;
    border: .1em solid var(--divider);
    color: black;
    cursor: pointer;
    transition: .5s;
    &:hover {
        background-color: #ff1744;
    }
    &:focus {
        outline: none;
    }
`
const LoadMoreButton = styled.button`
    padding: 1rem;
    background-color: #ff1744;
    color: black;
    font-size: 1.2em;
    border: 1px solid black;
`

const StatusIcon = styled.img`
    background: url('https://api.iconify.design/bi:check-circle-fill.svg?color=chartreuse') no-repeat center center / contain;`

const EditIcon = styled.img`
    background: url('https://api.iconify.design/akar-icons:edit.svg?color=%23ffcc00') no-repeat center center / contain;
`

const DeleteIcon = styled.img`
    background: url('https://api.iconify.design/ant-design:delete-filled.svg?color=%23e90000') no-repeat center center / contain;
`

const InfoIcon = styled.img`
    background: url('https://api.iconify.design/bi:info-circle-fill.svg?color=lightblue') no-repeat center center / contain;
`

const AdminProducts = () => {
    const dispatch = useDispatch()

    const products = useSelector(state => state.product.filteredProducts)
    const loading = useSelector(state => state.product.loading)
    const categories = useSelector(state => state.category.categories)

    const arrPrdStock = [{id: 1, name: 'disponible'}, {id: 2, name: 'no disponible'}]
    const arrPrdActive = [{id: 'true', name: 'activo'}, {id: 'false', name: 'inactivo'}]

    useEffect(() => {
        dispatch(getProductsByCategoryName('todas'))
    }, [dispatch, getProductsByCategoryName])

    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "vas a eliminar un producto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        })
        .then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProducts(id))
                Swal.fire(
                    'Eliminado!',
                    'Tu producto fue eliminado.',
                    'success'
                )
            }
        })
    }

    const handleChangeCat = e => {
        console.log('entra al handler con', e.target.value);
        dispatch(getProductsByCategoryName(e.target.value))
    }

    const handleChangeStock = e => {
        dispatch(getProductsByStock(e.target.value))
    }

    const handleChangeActive = e => {
        console.log('entra al handlechance', e.target.value)
        // if (e.target.value === 'inactivo') {
        //   dispatch(getProductsByIsActive('false'))
        // }

        // if (e.target.value === 'activo') {
        //   dispatch(getProductsByIsActive('true'))
        // }

        dispatch(getProductsByIsActive(e.target.value))
    }

    // ******************** Paginado ********************

    // Guardo la información en un estado
    // const [data, setData] = useState([])

    // Página actual, inicializada en 1
    const [currentPage, setCurrentPage] = useState(1)
    // Cards o Items que voy a mostrar por página
    const [itemsPerPage, setItemsPerPage] = useState(12)

    // Número de páginas que quiero mostrar
    const [pageNumberLimit, setPageNumberLimit] = useState(5)
    // Máximo de páginas
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    // Mínimo de páginas
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    // En cada página voy a insertar las cards
    const pages = [];
    for(let i = 1; i <= Math.ceil(products.length/itemsPerPage); i++) {
        pages.push(i)
    }

    // Información de los items que voy a mostrar en cada página
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem)

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    }
    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1)
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }
    const handleMoreBtn = () => {
        setItemsPerPage(itemsPerPage + 5)
    }

    let pageIncrementBtn = null
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <Button onClick={handleNextBtn}>&hellip;</Button>
    }

    let pageDecrementBtn = null
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <Button onClick={handlePrevBtn}>&hellip;</Button>
    }

    // Renderizamos los números de las páginas como (<Li>)
    const renderPageNumbers = pages.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return(
                <PageNumbers 
                className={currentPage === number ? 'active' : null} key={number} id={number} onClick={handleClick}>
                    {number}
                </PageNumbers>
            ) 
        } else {
            return null;
        }
    })

    // ******************** Paginado ********************

    if (loading) {
        return <h3>Cargando</h3>
    } else {
        return (
            <>
                <div className="filters">
                    <FilterBy 
                        array={categories}
                        handleChange={handleChangeCat}
                    />
                    <FilterBy 
                        array={arrPrdStock}
                        handleChange={handleChangeStock}
                    />
                    <FilterBy 
                        array={arrPrdActive}
                        handleChange={handleChangeActive}
                    />
                </div>

                <Table>
                    <caption>Productos</caption>
                    <thead>
                        <tr>
                            <th>*</th>
                            <th className="name">Nombre</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Rating</th>
                            <th>Categorías</th>
                            <th>Activo</th>
                            <th>Editar</th>
                            <th>Borrar</th>
                            <th>Info</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentItems.map(product => (
                            <tr key={product.id}>
                                <td data-label="*">*</td>
                                <td data-label="Nombre">{product.name}</td>
                                <td data-label="Precio">{product.price}</td>
                                <td data-label="Stock" className="center-text">{product.stock}</td>
                                <td data-label="Rating" className="center"><StarRatings
                                    rating={product.rating}
                                    starDimension="1em"
                                    starSpacing=".2em"
                                    numberOfStars={5}
                                    starRatedColor="gold" />
                                </td>
                                <td data-label="Categorías">{product.categories.map(cat => (<span key={cat.name} className="cat">{cat.name}</span>))}</td>
                                <td data-label="Activo" className="center-text">{(product.is_active) ? <StatusIcon /> : null}</td>
                                <td data-label="Editar" className="center-text" ><Link to={`/admin/products-edit/${product.id}`}><EditIcon /></Link></td>
                                <td data-label="Borrar" className="center-text" onClick={() => deleteHandler(product.id)}><DeleteIcon /></td>
                                <td data-label="Info" className="center-text" ><Link to={`/admin/products/${product.id}`}><InfoIcon /></Link></td>
                            </tr>
                        ))}
                        <NumbersContainer>

                            <Button onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}>Anterior</Button>                    
                            {pageDecrementBtn}
                            {renderPageNumbers}
                            {pageIncrementBtn}
                            <Button onClick={handleNextBtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>Siguiente</Button>

                        </NumbersContainer>
                    </tbody>
                </Table>
            </>
        )
    }

}

export default AdminProducts
