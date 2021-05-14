import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategoryId } from '../Redux/Actions/Product/ProductActions'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import HomeCards from '../Components/Organisms/ProductCards/HomeCards'


const Category = ({ categoryId }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsByCategoryId(parseInt(categoryId)))
    }, [dispatch, categoryId])

    const products = useSelector(state => state.product.filteredProducts);

    return (
        <div className="container">
            <Header id="header">
                {/* <h1>Henry Gadgets</h1> */}
            </Header>

            {products.length === 0 ?
                <Main id="main">
                    <h3>Aún no existen productos para esta categoría.</h3>
                </Main>
                :
                <Main id="main">
                    {products.map(p => <HomeCards product={p} />)}
                </Main>
            }
        </div>
    )
}

export default Category;
