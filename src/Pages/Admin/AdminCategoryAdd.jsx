
import React from 'react'
import Main from '../../Components/Atoms/Main'
import Footer from '../../Components/Organisms/Footer'

import CategoryForm from '../../Components/Organisms/CategoryForm'


const AdminCategoryAdd = () => {

    return (
        <div className="container">
            <Main id="main">
                <CategoryForm />
            </Main>
        </div>
    )
}

export default AdminCategoryAdd
