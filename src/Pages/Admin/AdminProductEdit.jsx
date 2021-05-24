import React from 'react'
import Main from '../../Components/Atoms/Main'
import EditProductForm from '../../Components/Organisms/EditProductForm'

const AdminProductedit = ({ productId }) => {
    return (
        <div className="container">
            <Main id="main">
                <EditProductForm productId={productId} />
            </Main>
        </div>
    )
}

export default AdminProductedit
