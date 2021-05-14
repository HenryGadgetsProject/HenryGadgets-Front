import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

import ClientRouter from './Routes/ClientRouter'
import AdminRouter from './Routes/AdminRouter'

import NavBar from './Components/Organisms/NavBar'
import ToggleForm from './Components/Molecules/Toggle'
import Footer from './Components/Organisms/Footer'


import GlobalStyles, { darkTheme, lightTheme } from './GlobalStyles'
import { ThemeProvider } from 'styled-components'

function App() {

    const mode = useSelector((state) => state.global.theme)

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
