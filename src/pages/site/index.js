import React from 'react'
import { Route, Switch } from 'react-router'
import Indent from './Indent/index'
function index() {
    return (
        <div>
            <Switch>    
                <Route path={'/admin/site/items'} component={Indent}/>
            </Switch>
        </div>
    )
}

export default index
