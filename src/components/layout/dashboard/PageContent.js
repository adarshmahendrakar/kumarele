import { Toolbar } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
export default function PageContent({classes,open,children}) {
    return (
        <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
       
        {children}
     
       
      </main>
    )
}
