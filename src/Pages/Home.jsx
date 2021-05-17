import React, { useEffect } from 'react'
import NavBar from '../Components/Organisms/NavBar'
//import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import FilterBy from '../Components/Organisms/FilterBy'
//import SortBy from '../Components/Organisms/SortBy'
import ProductCards from '../Components/Organisms/ProductCards'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsByCategoryName } from '../Redux/Actions/Product/ProductActions'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//import data from '../Data/categories'
import { Link } from 'react-router-dom'
import SearchBar from '../Components/Molecules/SearchBar'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsByCategoryName('todas'))
    }, [dispatch, getProductsByCategoryName])

    const products = useSelector((state) => state.product.filteredProducts)

    const categories = useSelector((state) => state.category.categories)

    const handleChange = e => {
        dispatch(getProductsByCategoryName(e.target.value))
    }

    return (
        <div className="container">
            <NavBar className="nav" />

            <Main id="main">
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
                    )
                    )}
                </Carousel>

                {/* <Breadcrumb id="breadcrumb-home" /> */}

                {/* <div> */}
                <Header id="header">
                    <h1>Henry Gadgets</h1>
                </Header>

                <aside>

                    {/* <SearchBar/> */}

                    <FilterBy
                        array={categories}
                        handleChange={handleChange}
                    />

                    {/* <SortBy />

                        <SortBy />

                        <SortBy />

                        <SortBy /> */}
                </aside>

                <section>
                    <div>
                        {/* <Pagination /> */}
                    </div>

                    <h2>Catálogo</h2>

                    <div className="popular-products">
                        {/* <TopServices - Cards /> */}
                        <ProductCards products={products} />

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
