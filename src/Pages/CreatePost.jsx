import React from 'react'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import Footer from '../Components/Organisms/Footer'
import ProductForm from '../Components/Organisms/ProductForm'
import CategoryForm from '../Components/Organisms/CategoryForm'

const CreatePost = () => {
    return (
        <div className="container">
            <NavBar className="nav" />
            <Breadcrumb id="breadcrumb" />
            {/* <Header id="header">
                <h1>Henry Gadgets</h1>
            </Header> */}

            <Main id="main">
                <ProductForm/>
                {/* <CategoryForm/> */}
            </Main>

            <Footer />
        </div>
    )
}

export default CreatePost
