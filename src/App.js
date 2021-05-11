import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/Organisms/NavBar'
import ToggleForm from './Components/Molecules/Toggle'
import Footer from './Components/Organisms/Footer'
import About from './Pages/About'
import CreatePost from './Pages/CreatePost'
import DetailPost from './Pages/DetailPost'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import MyChart from './Pages/MyChart'
import NotFound from './Pages/NotFound'
import { useSelector } from 'react-redux'
import CategoryPage from './Pages/CategoryPage'
import HandyPage from './Pages/HandyPage'

import GlobalStyles, { darkTheme, lightTheme } from './GlobalStyles'
import { ThemeProvider } from 'styled-components'

function App() {
    const mode = useSelector((state) => state.global.theme)

    return (
        <ThemeProvider theme={mode === false ? lightTheme : darkTheme}>
            <GlobalStyles />

            <NavBar className="nav" />
            <ToggleForm />

            <Switch>
                <Route
                    exact path="/"
                    component={Landing}
                >
                </Route>
                <Route
                    path="/about"
                    component={About}
                />
                <Route
                    path="/create"
                    component={CreatePost}
                />
                <Route
                    path="/detail/:id"
                    component={DetailPost}
                />
                <Route
                    path="/home"
                    component={Home}
                />
                <Route
                    path="/chart"
                    component={MyChart}
                />
                <Route
                    exact path='/category/:categoryId'
                    render={({ match }) => <CategoryPage categoryId={match.params.categoryId} />}
                />
                <Route
                    exact path='/handyx/:handyId'
                    render={({ match }) => <HandyPage handyId={match.params.handyId} />}
                />

                <Route
                    component={NotFound}
                />
            </Switch>

            <Footer />

        </ThemeProvider>
    )
}

export default App
