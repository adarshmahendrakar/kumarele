import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Users from './users'
import Items from './items'
import Fields from './fields'
import Supplier from './suppliers'

import Projects from './projects'
function index() {
    const baseroot='/admin/mdm'
    return (
       
            <Switch>
                <Route path={baseroot+'/fields'} component={Fields} />
                <Route path={baseroot+'/projects'} component={Projects} />
                <Route path={baseroot+'/suppliers'} component={Supplier} />
                <Route path={baseroot+'/users'} component={Users} />
                <Route path={baseroot+'/items'} component={Items} />
                </Switch>
       
    )
}

export default index
