import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBarHome from '../Components/Organisms/NavBarHome'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import FilterPrdByCatName from '../Components/Organisms/FilterPrdByCatName'
import FilterPrdByStock from '../Components/Organisms/FilterPrdByStock'
import FilterPrdByPrice from '../Components/Organisms/FilterPrdByPrice'
import FilterPrdByRating from '../Components/Organisms/FilterPrdByRating'
import { useSelector, useDispatch } from 'react-redux'
import { setProductsByCategoryName, setProductsByStock } from '../Redux/Actions/Product/ProductActions'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { filteredProductsSelector } from '../Helpers/filtered-products-selector.js'
import Paginate from '../Components/Molecules/Paginate'

const Home = () => {

    const dispatch = useDispatch()

    const categories = useSelector((state) => state.category.categories)

    const products = useSelector(state => filteredProductsSelector(state))

    useEffect(() => {
        dispatch(setProductsByCategoryName(''))
        dispatch(setProductsByStock(''))
    }, [dispatch])

    return (
        <div className="container">
            <Header id="header">
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
                
            </Header>

            <Breadcrumb id="breadcrumb" />

            <Main id="main">
                <aside>
                    <input type="checkbox" id="btn-drop-down-filters" />
                    <label htmlFor="btn-drop-down-filters" className="icon-drop-down-filters">V</label>

                    <div className="filters">
                        <h6>Buscar por: </h6>
                        <FilterPrdByCatName />
                        <FilterPrdByStock />
                        <FilterPrdByPrice />
                        <FilterPrdByRating />
                    </div>
                </aside>
                <section>
                    <Paginate data={products}/>
                </section>                
            </Main>
            <Footer />
        </div>
    )
}

export default Home
