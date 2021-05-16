import React, { useEffect } from 'react'
import Main from '../../Components/Atoms/Main'
import EditProductForm from '../../Components/Organisms/EditProductForm'
import { useDispatch, useSelector } from 'react-redux'
import { getproductById } from '../../Redux/Actions/Categories/CategoriesActions'

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