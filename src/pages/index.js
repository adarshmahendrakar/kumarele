import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Admin from './admin'
import LoginPage from './login'

function index() {
    return (
        <Switch>
          
            <Route path='/admin' component={Admin}/>
            <Route path='/' component={LoginPage}/>
        </Switch>
    )
}

export default index
