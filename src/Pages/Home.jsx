import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBarHome from '../Components/Organisms/NavBarHome'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import FilterPrdByCatName from '../Components/Organisms/FilterPrdByCatName'
import FilterPrdByStock from '../Components/Organisms/FilterPrdByStock'
import ProductCards from '../Components/Organisms/ProductCards'
import { useSelector, useDispatch } from 'react-redux'
import { setProductsByCategoryName, setProductsByStock } from '../Redux/Actions/Product/ProductActions'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import { filteredProductsSelector } from '../Helpers/filtered-products-selector.js'

const Home = () => {
    const dispatch = useDispatch()

    const categories = useSelector((state) => state.category.categories)
    // const categories = useSelector(filteredProductsSelector)

    useEffect(() => {
        dispatch(setProductsByCategoryName(''))
        dispatch(setProductsByStock(''))
    }, [dispatch])

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

            <Main id="main">

                {/* <div> */}
                <Header id="header">
                    <h1>Henry Gadgets</h1>
                </Header>

                <aside>
                    <FilterPrdByCatName />

                    <FilterPrdByStock />

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
