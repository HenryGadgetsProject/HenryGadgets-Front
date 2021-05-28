import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBarHome from '../Components/Organisms/NavBarHome'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
// import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import FilterPrdByCatName from '../Components/Organisms/FilterPrdByCatName'
import FilterPrdByStock from '../Components/Organisms/FilterPrdByStock'
import FilterPrdByPrice from '../Components/Organisms/FilterPrdByPrice'
import FilterPrdByRating from '../Components/Organisms/FilterPrdByRating'
import ProductCards from '../Components/Organisms/ProductCards'
import { useSelector, useDispatch } from 'react-redux'
import { setProductsByCategoryName, setProductsByStock } from '../Redux/Actions/Product/ProductActions'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { filteredProductsSelector } from '../Helpers/filtered-products-selector.js'

import styled from 'styled-components'

const NumbersContainer = styled.ul`
    list-style: none;
    display: flex;
    align-self: center;
    background: var(--pure-white);
    padding: 0;
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
// const LoadMoreButton = styled.button`
//     padding: 1rem;
//     background-color: #ff1744;
//     color: black;
//     font-size: 1.2em;
//     border: 1px solid black;
// `

const Home = () => {
    const dispatch = useDispatch()

    const categories = useSelector((state) => state.category.categories)
    // const categories = useSelector(filteredProductsSelector)

    // const products = useSelector((state) => state.product.filteredProducts)
    const products = useSelector(state => filteredProductsSelector(state))

    useEffect(() => {
        dispatch(setProductsByCategoryName(''))
        dispatch(setProductsByStock(''))
    }, [dispatch])

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
        <div className="container">
            <NavBarHome />
            {/* <NavBar /> */}

            {/* ya tiene preparado el onClick para que vaya a /products/id */}
            <Carousel
                autoPlay={true}
                dynamicHeight={true}
                infiniteLoop={true}
                interval={3000}
                renderIndicator={false}
                showIndicators={false}
                showThumbs={false}
                stopOnHover={true}>
                {categories.map((category) => (
                    <Link to={`/category/${category.id}`} key={category.id}>
                        <div className="category-slide" id={category.id} >
                            <span className="slideTitle">{category.name}</span>
                            <img src={category.photo} alt={category.name} />
                        </div>
                    </Link>
                ))}
            </Carousel>

            {/* <Header id="header">
                <h1>Henry Gadgets</h1>
            </Header> */}

            <Breadcrumb id="breadcrumb" />

            <Main id="main">
                <aside>
                    <div className="filters">
                        <h6>Buscar por: </h6>

                        <FilterPrdByCatName />

                        <FilterPrdByStock />

                        <FilterPrdByPrice />

                        <FilterPrdByRating />
                    </div>

                    {/* <FilterPrdByCatName />

                    <FilterPrdByStock />

                    <FilterPrdByPrice />

                    <FilterPrdByRating /> */}

                    {/* <SortBy />

                        <SortBy />

                        <SortBy />

                        <SortBy /> */}
                </aside>

                <section>
                    <div>
                        {/* <Pagination /> */}
                    </div>

                    {/* <h2>Catálogo</h2> */}

                    <div className="popular-products">
                        {/* <TopServices - Cards /> */}
                        <ProductCards
                            products={currentItems}
                        />

                        {/* Pasamos la parte lógica hacia ProductCards para ahorrar código en Home */}
                    </div>

                    {/* <LoadMoreButton onClick={handleMoreBtn}>Cargar más productos</LoadMoreButton> */}

                    <NumbersContainer>
                        <Button onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}>Anterior</Button>
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                        <Button onClick={handleNextBtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>Siguiente</Button>
                    </NumbersContainer>


                </section>
            </Main>
            <Footer />
        </div>
    )
}

export default Home
