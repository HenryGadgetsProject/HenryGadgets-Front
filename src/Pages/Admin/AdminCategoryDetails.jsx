import React, { useEffect } from 'react'
import styled from "styled-components"
import StarRatings from 'react-star-ratings';
import { useSelector, useDispatch } from 'react-redux'
import { getCategoryById } from '../../Redux/Actions/Categories/CategoriesActions'




const AdminCategoryDetails = ({ categoryId }) => {



  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoryById(categoryId))

  }, [dispatch, getCategoryById])

  const category = useSelector(state => state.category.category);

  return (
    <div>

      {JSON.stringify(category, null, 10)}
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
