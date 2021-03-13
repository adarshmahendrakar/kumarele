import React from 'react'
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { useHistory } from 'react-router-dom';
export default function Header({classes,handleDrawerOpen}) {
  
  const [loginuser,setloginuser]=useLocalStorage('keploginuser',{})
  const history=useHistory();
    return (
    
        <AppBar
        elevation={0}
        position="fixed"
        className={clsx(classes.appBar
        )}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Kumar Electricals
          </Typography>
          <Box flex={1}/>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>{localStorage.setItem("keploginuser",JSON.stringify({}));history.push('/')}}
            edge="start"
            className={clsx(classes.menuButton)}
          >
            <PowerSettingsNewIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
     
     
    )
}

