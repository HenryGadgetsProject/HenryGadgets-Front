import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ClientRouter from './Routes/ClientRouter'
import AdminRouter from './Routes/AdminRouter'
import ToggleForm from './Components/Molecules/Toggle'

import { useDispatch } from 'react-redux'
import { getCategories } from './Redux/Actions/Categories/CategoriesActions'
import { getPopularProducts, getProducts } from './Redux/Actions/Product/ProductActions'
import { getUsers } from './Redux/Actions/User/UserActions'
import { createCart } from './Redux/Actions/Cart/CartActions'

import GlobalStyles, { darkTheme, lightTheme } from './GlobalStyles'
import { ThemeProvider } from 'styled-components'

function App() {
    const mode = useSelector((state) => state.global.theme)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getPopularProducts());
        dispatch(getProducts());
        dispatch(getUsers());

    }, [dispatch])

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
