import React from 'react'
import Main from '../../Components/Atoms/Main'
import Footer from '../../Components/Organisms/Footer'

import ProductForm from '../../Components/Organisms/ProductForm'


const AdminProductAdd = () => {

    return (
        <div className="container">
            <Main id="main">
                <ProductForm />
            </Main>
        </div>
    )
}

export default AdminProductAdd
