import React from 'react'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import HomeCards from '../Components/Organisms/ProductCards/HomeCards'
import { useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//import data from '../Data/categories'
import { Link } from 'react-router-dom'

const Home = () => {

    // const popularProducts = useSelector((state) => state.product.popularProducts)
    const categories = useSelector((state) => state.category.categories)

    // const handleCategoryClick = (e) => {

    //     // hacer le route al categories/1
    //     console.log(e.target.id)
    // }

    return (
        <div className="container">
            <Header id="header">
                <h1>Henry Gadgets</h1>
            </Header>

            <Main id="main">
                {/* ya tiene preparado el onClick para que vaya a /products/id */}
                <Carousel
                    autoPlay={true}
                    interval={3000}
                    showIndicators={false}
                    // stopOnHover={true}
                    dynamicHeight={true}
                    renderIndicator={false}
                    infiniteLoop={true}
                    showThumbs={false}>
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

                <section>
                    <div>
                        {/* <Pagination /> */}
                    </div>

                    <h2>Catálogo</h2>

                    <div className="popular-products">
                        {/* <TopServices - Cards /> */}
                        <HomeCards/>

                        {/* Pasamos la parte lógica hacia HomeCards para ahorrar código en Home */}
                    </div>
                </section>
            </Main>
        </div>
    )
}

export default Home
