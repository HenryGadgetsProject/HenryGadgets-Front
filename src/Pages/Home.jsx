import React from 'react'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import HomeCards from '../Components/Organisms/HandyCards/HomeCards'
import { useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//import data from '../Data/categories'
import { Link } from 'react-router-dom'


const Home = () => {

    const popularHandys = useSelector((state) => state.handler.popularHandys)
    const categories = useSelector((state) => state.category.categories)

    // const handleCategoryClick = (e) => {

    //     // hacer le route al categories/1
    //     console.log(e.target.id)
    // }

    return (
        <div className="container">
            <Header id="header">
                <h1>HandyX</h1>
            </Header>

            <Main id="main">
                {/* ya tiene preparado el onClick para que vaya a /handlers/id */}
                <Carousel
                    autoPlay={true}
                    interval={3000}
                    showIndicators={false}
                    // stopOnHover={true}
                    dynamicHeight={true}
                    renderIndicator={false}
                    infiniteLoop={true}
                    showThumbs={false}>
                    {categories.map((item) => (
                        <Link to={`/category/${item.id}`} key={item.id}>
                            <div className="category-slide" id={item.id} >
                                <span className="slideTitle">{item.name}</span>
                                <img src={item.photo} alt={item.name} />
                            </div>
                        </Link>
                    )
                    )}
                </Carousel>

                <section>
                    <div>
                        {/* <Pagination /> */}
                    </div>

                    <h2>HandyX destacados.</h2>

                    <div className="popular-handys">
                        {/* <TopServices - Cards /> */}
                        {popularHandys.map(handy => {
                            return (
                                <HomeCards
                                    key={handy.id}
                                    handy={handy}
                                />
                            )
                        })}
                    </div>
                </section>
            </Main>
        </div>
    )
}

export default Home
