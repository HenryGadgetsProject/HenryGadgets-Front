import React, { useEffect } from 'react'
import Main from '../../Components/Atoms/Main'
import EditCategoryForm from '../../Components/Organisms/EditCategoryForm'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryById } from '../../Redux/Actions/Categories/CategoriesActions' 

const AdminCategoryEdit = ({id}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategoryById(parseInt(id)))
    }, [id, dispatch])
    
    const category = useSelector((state) => state.category.category)

    return (
        <div className="container">
            <Main id="main">
                <EditCategoryForm category={category}/>
            </Main>
        </div>
    )
}

export default AdminCategoryEdit