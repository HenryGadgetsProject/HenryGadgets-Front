import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsById } from '../../Redux/Actions/Product/ProductActions'
import BigCardAdmin from '../../Components/Atoms/BigCardAdmin.jsx'

const AdminProductDetails = ({ productId }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsById(productId))
    }, [dispatch, productId])

    const product = useSelector(state => state.product.product);

    return (
        <BigCardAdmin product={product} />
    )
}

export default AdminProductDetails
