import React, { useState } from 'react'
import ProductCards from '../../Organisms/ProductCards'

import styled from 'styled-components'

const NumbersContainer = styled.ul`
    align-self: center;
    background: var(--pure-white);
    color: var(--dark-primary);
    display: flex;
    list-style: none;
    padding: 0;
`
const PageNumbers = styled.li`
    border: .1em solid var(--divider);
    color: var(--dark-primary);
    cursor: pointer;
    font-size: 1.2em;
    font-weight: 500;
    text-align: center;
    padding: 1.6em;
    transition: .5s;
    &:hover {
        background: var(--background-gradient);
        color: var(--pure-white);
    }
`
const Button = styled.button`
    font-size: 1.2em;
    text-align: center;
    padding: 1.6em;
    background-color: transparent;
    border: .1em solid var(--divider);
    color: var(--dark-primary);
    cursor: pointer;
    transition: all .3s linear;
    &:hover {
        background: var(--background-gradient);
        color: var(--pure-white);
    }
    &:focus {
        outline: none;
    }
`

const Paginate = ({data, component}) => {

    // ******************** Paginado ********************

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
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i)
    }

    // Información de los items que voy a mostrar en cada página
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

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
    //     setItemsPerPage(itemsPerPage + 8)
    // }

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
            return (
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

    return (
        <>
            <div className="popular-products">
                <ProductCards
                    products={currentItems}
                />
            </div>

            {/* <LoadMoreButton onClick={handleMoreBtn}>Cargar más productos</LoadMoreButton> */}
            <NumbersContainer>
                <Button className="btn-pag" onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}>Anterior</Button>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <Button className="btn-pag" onClick={handleNextBtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>Siguiente</Button>
            </NumbersContainer>
        </>
    )
}

export default Paginate
