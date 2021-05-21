import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBarHome from '../Components/Organisms/NavBarHome'
// import NavBar from '../Components/Organisms/NavBar'
// import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import FilterPrdByCatName from '../Components/Organisms/FilterPrdByCatName'
import FilterPrdByStock from '../Components/Organisms/FilterPrdByStock'
import ProductCards from '../Components/Organisms/ProductCards'
//import SortBy from '../Components/Organisms/SortBy'
import { useSelector, useDispatch } from 'react-redux'
// import { getProductsByCategoryName, getProductsByStock } from '../Redux/Actions/Product/ProductActions'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//import data from '../Data/categories'
import { filteredProductsSelector } from '../Helpers/filtered-products-selector.js'

const Home = () => {

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getProductsByCategoryName('todas'))
    // }, [dispatch, getProductsByCategoryName])

    // useEffect(() => {
    //     dispatch(filteredProductsSelector)
    // }, [dispatch])

    // const products = useSelector((state) => state.product.filteredProducts)
    // const products = useSelector(filteredProductsSelector)

    const categories = useSelector((state) => state.category.categories)
    // const categories = useSelector(filteredProductsSelector)

    // const arrPrdStock = [{id: 1, name: 'disponible'}, {id: 2, name: 'no disponible'}]

    // const handleChangeCat = e => {
        // dispatch(getProductsByCategoryName(e.target.value))
    // }

    // const handleChangePrd = e => {
        // if (e.target.value === 'false' || e.target.value === 'true') {
            // console.log('En handle', typeof(e.target.value))
            // const toBoolean = Boolean(e.target.value)
            // dispatch(getProductsByStock(e.target.value))
        // }

        // else {
        //     dispatch(getProductsByIsActive(e.target.value))
        // }
        // console.log('Tipo', typeof(toBoolean))
    // }


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

            {/* <Breadcrumb id="breadcrumb-home" /> */}

            {/* <div className="filters"> */}
                {/* <FilterBy
                    array={categories}
                    handleChange={handleChangeCat}
                />

                <FilterBy
                    array={arrPrdStock}
                    handleChange={handleChangePrd}
                /> */}

                {/* <SortBy />

                    <SortBy />

                    <SortBy />

                    <SortBy /> */}
            {/* </div> */}

            <Main id="main">

                {/* <div> */}
                <Header id="header">
                    <h1>Henry Gadgets</h1>
                </Header>

                <aside>
                    <FilterPrdByCatName />
                    {/* <FilterBy
                        array={categories}
                        handleChange={handleChangeCat}
                    /> */}

                    <FilterPrdByStock />
                    {/* <FilterBy
                        array={arrPrdStock}
                        handleChange={handleChangePrd}
                    /> */}

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
                        <ProductCards />

                        {/* Pasamos la parte lógica hacia ProductCards para ahorrar código en Home */}
                    </div>
                </section>
                {/* </div> */}
            </Main>
            <Footer />
        </div>
    )
}

export default Home
