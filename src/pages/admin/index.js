import React from 'react'
import Mdm from '../mdm'
import Quotation from '../quotation'
import Account from '../account'
import Site from '../site'
import Inventory from '../inventory'
import Grn from '../inventory/grn/index'
import { Route, Switch } from 'react-router-dom'
import DashboardLayout from '../../components/layout/dashboard'
function index() {
    const baseroot='/admin'
    const menus=[{
        title:'Admin Module',
        submenu:[{
            icon:'',
          title:'Manage Item',
          link:baseroot+'/mdm/items'
        },
        {
          title:'Manage Project',
          link:baseroot+'/mdm/projects'
        },
        {
          title:'Manage Supplier',
          link:baseroot+'/mdm/suppliers'
        },
        {
          title:'Manage Fields',
          link:baseroot+'/mdm/fields'
        },
        {
          title:'Manage Users',
          link:baseroot+'/mdm/users'
        }
      ]},
      {
        title:'Purchase Module',
        submenu:[{
            icon:'',
          title:'Purchase Orders',
          link:baseroot+'/purchase/orders'
        }
      ]},
      ,
      {
        title:'Inventory Module',
        submenu:[{
            icon:'',
          title:'Goods Recepit Notes',
          link:baseroot+'/inventory/grn'
        },
        {
          icon:'',
        title:'Indent Issue',
        link:baseroot+'/inventory/indent'
      },
      {
        icon:'',
      title:'Return Receive',
      link:baseroot+'/inventory/return'
    }
      ]},
      ,
      {
        title:'Site Module',
        submenu:[{
            icon:'',
          title:'Indent Details',
          link:baseroot+'/site/items'
        }
      ]},
      {
        title:'Account Module',
        submenu:[{
            icon:'',
          title:'Accounts',
          link:baseroot+'/account/items'
        }
      ]},
      ,
      {
        title:'Quotation Module',
        submenu:[{
            icon:'',
          title:'Quotation',
          link:baseroot+'/quotation/items'
        }
      ]},
      
    ]
    return (
        <DashboardLayout menus={menus}>
        <Switch>
        <Route path={baseroot+'/mdm'} component={Mdm}/>
            <Route path={baseroot+'/quotation'} component={Quotation}/>
            <Route path={baseroot+'/inventory'} component={Inventory}/>
            <Route path={baseroot+'/site'} component={Site}/>
            <Route path={baseroot+'/account'} component={Account}/>
            <Route path={baseroot+'/purchase'} component={Account}/>
        </Switch>
        </DashboardLayout>
    )
}

export default index
