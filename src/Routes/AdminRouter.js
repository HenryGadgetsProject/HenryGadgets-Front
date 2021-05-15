import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Admin from '../Pages/Admin'

const AdminRouter = () => {
    return (
        <div>
            <Switch>
                <Route path='/' component={Admin} />

            </Switch>
        </div>
    )
}

export default AdminRouter
