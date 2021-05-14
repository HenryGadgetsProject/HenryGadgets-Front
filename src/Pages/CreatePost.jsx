import React from 'react'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import ProductForm from '../Components/Organisms/ProductForm'
import CategoryForm from '../Components/Organisms/CategoryForm'

const CreatePost = () => {
    return (
        <div className="container">
            <Header id="header">
                {/* <h1>Henry Gadgets</h1> */}
            </Header>

            <Main id="main">
                <ProductForm/>
                <CategoryForm/>
            </Main>
        </div>
    )
}

export default CreatePost
