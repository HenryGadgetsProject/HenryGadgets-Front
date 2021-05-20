import React from 'react'
import Main from '../../Components/Atoms/Main'
import EditCategoryForm from '../../Components/Organisms/EditCategoryForm'

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
