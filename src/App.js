import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ClientRouter from './Routes/ClientRouter'
import AdminRouter from './Routes/AdminRouter'
import ToggleForm from './Components/Molecules/Toggle'
import { USER_LOGIN_SUCCESS } from './Redux/Actions/User/UserActionTypes'

import { getCategories } from './Redux/Actions/Categories/CategoriesActions'
import { getPopularProducts, getProducts } from './Redux/Actions/Product/ProductActions'
import { getUsers } from './Redux/Actions/User/UserActions'


import GlobalStyles, { darkTheme, lightTheme } from './GlobalStyles'
import { ThemeProvider } from 'styled-components'

// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

function App() {

    const mode = useSelector((state) => state.global.theme)

    const cart = useSelector(state => state.cart.cartList)

    const fullUser = JSON.parse(localStorage.getItem('JWT'))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getPopularProducts());
        dispatch(getProducts());
        dispatch(getUsers());
        if (fullUser) {
            dispatch(
                {
                    type: USER_LOGIN_SUCCESS,
                    payload: fullUser
                }
            )
        }

    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])



    return (
        <ThemeProvider theme={mode === false ? lightTheme : darkTheme}>
            <GlobalStyles />
            <ToggleForm />

            <Switch>
                <Route path='/admin' component={AdminRouter} />
                <Route path='/' component={ClientRouter} />
            </Switch>
        </ThemeProvider>
    )
}

export default App
