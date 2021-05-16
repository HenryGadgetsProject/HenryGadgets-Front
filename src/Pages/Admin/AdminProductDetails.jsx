import React, { useEffect } from 'react'

import StarRatings from 'react-star-ratings';
import { useSelector, useDispatch } from 'react-redux'
import { getProductsById } from '../../Redux/Actions/Product/ProductActions'




const AdminProductDetails = ({ productId }) => {



  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsById(productId))

  }, [dispatch, productId])

  const product = useSelector(state => state.product.product);

  return (
    <div>


      {JSON.stringify(product, null, 3)}

      <h2>PANTALLA DE DETALLE </h2>
      <h3>{product.name}</h3>


      <div>{product.price}</div>
      <div className="center-text">{product.stock}</div>
      <div className="center"><StarRatings
        rating={product.rating}
        starDimension="1em"
        starSpacing=".2em"
        numberOfStars={5}
        starRatedColor="gold"
      /></div>
      <div>{product.categories?.map(cat => (<span key={cat.name} className="cat">{cat.name}</span>))}</div>
      {/* <div className="center-text">{(product.is_active) ? <StatusIcon /> : null}</div> */}



    </div >
  )
}

export default AdminProductDetails
