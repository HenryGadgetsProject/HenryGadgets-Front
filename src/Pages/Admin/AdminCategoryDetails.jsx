import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Main from '../../Components/Atoms/Main'
import { getCategoryById } from '../../Redux/Actions/Categories/CategoriesActions'




const AdminCategoryDetails = ({ categoryId }) => {



  const dispatch = useDispatch()

  dispatch(getCategoryById(categoryId))

  const category = useSelector(state => state.category.category);

  return (
    <div>
      <Main>
        {JSON.stringify(category, null, 10)}

      </Main>
      {/* <img src={category.photo} alt={category.name} />
      
      <h2>PANTALLA DE DETALLE de Category </h2>
      <h3>{category.name}</h3>


      <div>{category.id}</div>
      <div>{category.description}</div>
      <div className="center-text">{category.photo}</div> */}



    </div >
  )
}

export default AdminCategoryDetails
