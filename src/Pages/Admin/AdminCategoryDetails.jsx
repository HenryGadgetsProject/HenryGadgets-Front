import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategoryById } from '../../Redux/Actions/Categories/CategoriesActions'
import Main from '../../Components/Atoms/Main'

const AdminCategoryDetails = ({ categoryId }) => {
    const dispatch = useDispatch()

    dispatch(getCategoryById(categoryId))

    const category = useSelector(state => state.category.category);

    return (
        <div>
            <Main>
                {JSON.stringify(category, null, 10)}
            </Main>
        </div>
    )
}

export default AdminCategoryDetails
