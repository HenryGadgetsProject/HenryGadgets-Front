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
import BuySuccess from '../Pages/BuySuccess'

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
<<<<<<< HEAD

                <Route
                    path='/product/:productId/reviews'
                    render={({ match }) => <Reviews productId={match.params.productId}/>}
=======
                <Route path="/success/:orderId"
                    render={({ match }) => <BuySuccess orderId={match.params.orderId} />}
>>>>>>> 0c5f6c18145930e9f3cc72b3db009b159d392d3e
                />

                <Route component={NotFound} />
            


            </Switch>

        </>

    )
}

export default ClientRouter
