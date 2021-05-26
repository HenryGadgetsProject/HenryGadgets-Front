import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from '../Pages/Landing'
import About from '../Pages/About'
import Home from '../Pages/Home'
import MyCart from '../Pages/MyCart'
import Category from '../Pages/Category'
import Product from '../Pages/Product'
import NotFound from '../Pages/NotFound'
import Login from '../Pages/User/Login'
import Register from '../Pages/User/Register'
import UserProfile from '../Pages/User/UserProfile'
import Logout from '../Pages/User/Logout'
import Reviews from '../Pages/Reviews'
import ConfirmBuy from '../Pages/ConfirmBuy'

const ClientRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Route path="/cart" component={MyCart} />
                <Route path="/reviews" component={Reviews} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/register" component={Register} />
                <Route path="/user" component={UserProfile} />
                <Route exact path='/category/:categoryId'
                    render={({ match }) => <Category categoryId={match.params.categoryId} />}
                />
                <Route
                    exact path='/product/:productId'
                    render={({ match }) => <Product productId={match.params.productId} />}
                />
                <Route path="/confirmation" component={ConfirmBuy} />

                <Route
                    path='/product/:productId/reviews'
                    render={({ match }) => <Reviews productId={match.params.productId}/>}
                />

                <Route component={NotFound} />
            


            </Switch>

        </>

    )
}

export default ClientRouter
