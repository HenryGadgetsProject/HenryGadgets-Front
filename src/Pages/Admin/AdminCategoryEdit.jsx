import React, { useEffect } from 'react'
import Main from '../../Components/Atoms/Main'
import EditCategoryForm from '../../Components/Organisms/EditCategoryForm'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryById } from '../../Redux/Actions/Categories/CategoriesActions'

const AdminCategoryEdit = ({ categoryId }) => {

    return (
        <div className="container">
            <Main id="main">
                <EditCategoryForm categoryId={categoryId} />
            </Main>
        </div>
    )
}

export default AdminCategoryEdit