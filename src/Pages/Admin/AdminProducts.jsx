import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import Swal from 'sweetalert2'
import Table from '../../Components/Atoms/Table'
// import FilterPrdByCatName from '../../Components/Organisms/FilterPrdByCatName'
// import FilterPrdByStock from '../../Components/Organisms/FilterPrdByStock'
// import FilterPrdByActive from '../../Components/Organisms/FilterPrdByActive'
// import FilterPrdByPrice from '../../Components/Organisms/FilterPrdByPrice'
// import FilterPrdByRating from '../../Components/Organisms/FilterPrdByRating'
import { deleteProducts } from '../../Redux/Actions/Product/ProductActions'
import { useSelector, useDispatch } from 'react-redux'
// import { setProductsByCategoryName, setProductsByStock } from '../../Redux/Actions/Product/ProductActions'
import { filteredProductsSelector } from '../../Helpers/filtered-products-selector.js'
// import Paginate from '../../Components/Molecules/Paginate'

import styled from "styled-components"

const NumbersContainer = styled.ul`
    list-style: none;
    display: flex;
    align-self: center;
    background: var(--pure-white);
    padding: 0;
    margin-top: 4em;
`
// const PageNumbers = styled.li`
    // ${'' /* border: .1em solid var(--divider);
    // cursor: pointer;
    // font-size: 1.2em;
    // font-weight: 500;
    // padding: 1.6em;
    // text-align: center;
    // transition: .5s;
    // &:hover {
    //     background-color: #ff616f;
    // } */}
    // ${'' /* &.active {
    //     font-weight: bold;
    //     background-color: var(--light-primary);
    //     color: black;
    // } */}
// `
// const Button = styled.button`
    // ${'' /* background-color: transparent;
    // border: .1em solid var(--divider);
    // color: black;
    // cursor: pointer;
    // font-size: 1.2em;
    // padding: 1.6em;
    // text-align: center;
    // transition: .5s;
    // &:hover {
    //     background-color: #ff1744;
    // }
    // &:focus {
    //     outline: none;
    // } */}
// `
// const LoadMoreButton = styled.button`
//     padding: 1rem;
//     background-color: #ff1744;
//     color: black;
//     font-size: 1.2em;
//     border: 1px solid black;
// `

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

    const products = useSelector(state => filteredProductsSelector(state))
    const loading = useSelector(state => state.product.loading)

    // useEffect(() => {
    //     dispatch(setProductsByCategoryName(''))
    //     dispatch(setProductsByStock(''))

    // }, [dispatch])

    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "vas a eliminar un producto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7FFF00',
            cancelButtonColor: '#E90000',
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


    // ******************** Paginado ********************

    // Guardo la información en un estado
    // const [data, setData] = useState([])

    // Página actual, inicializada en 1
    const [currentPage, setCurrentPage] = useState(1)
    // Cards o Items que voy a mostrar por página
    const [itemsPerPage] = useState(12)

    // Número de páginas que quiero mostrar
    const [pageNumberLimit] = useState(5)
    // Máximo de páginas
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    // Mínimo de páginas
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    // En cada página voy a insertar las cards
    const pages = [];
    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
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
    // const handleMoreBtn = () => {
    //     setItemsPerPage(itemsPerPage + 5)
    // }

    let pageIncrementBtn = null
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <button onClick={handleNextBtn}>&hellip;</button>
    }

    let pageDecrementBtn = null
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <button onClick={handlePrevBtn}>&hellip;</button>
    }

    // Renderizamos los números de las páginas como (<Li>)
    const renderPageNumbers = pages.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    className={currentPage === number ? "active btn-pag" : "btn-pag"} key={number} id={number} onClick={handleClick}>
                    {number}
                </li>
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
                {/* <div className="filters">
                    <FilterPrdByCatName />

                    <FilterPrdByStock />

                    <FilterPrdByActive />

                    <FilterPrdByPrice />

                    <FilterPrdByRating />
                </div> */}

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
                    </tbody>
                </Table>

                <NumbersContainer>
                    <button className="btn-pag" onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}>Anterior</button>
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                    <button className="btn-pag" onClick={handleNextBtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>Siguiente</button>
                </NumbersContainer>
            </>
        )
    }

}

export default AdminProducts
