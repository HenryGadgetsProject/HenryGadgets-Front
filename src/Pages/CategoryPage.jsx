import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHandysByCategoryId } from '../Redux/Actions/Handy/HandyActions'
import Header from '../Components/Atoms/Header'
import Main from '../Components/Atoms/Main'
import HomeCards from '../Components/Organisms/HandyCards/HomeCards'


const CategoryPage = ({ categoryId }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHandysByCategoryId(parseInt(categoryId)))
    }, [dispatch, categoryId])

    const handys = useSelector(state => state.handler.filteredHandys);


    return (
        <div className="container">
            <Header id="header">
                <h1>HandyX</h1>
            </Header>

            {handys.length === 0 ?
                <Main id="main">
                    <h3>Aún no existen HandyX para esta categoría.</h3>
                </Main>
                :
                <Main id="main">
                    {handys.map(h => <HomeCards handy={h} />)}
                </Main>
            }
        </div>
    )
}

export default CategoryPage;
