import React from 'react'
import { Route, Switch } from 'react-router'
import Grn from './grn/index'
import Indent from './indentissue/index'
import Return from './returnreceive/index'

function index() {
    return (
        <div>
            <Switch>
                <Route path={'/admin/inventory/grn'} component={Grn}/>
                <Route path={'/admin/inventory/indent'} component={Indent}/>
                <Route path={'/admin/inventory/return'} component={Return}/>



                {/* <Route path={baseroot+'/inventory'} component={Inventory}/> */}
            </Switch>
        </div>
    )
}

export default index
