import React from 'react'
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Collapse, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons';
export default function Sidebar({classes,open,menus,handleDrawerOpen }) {
    return (
        <Drawer
        className={classes.drawer}
      
        variant='temporary'
        open={open}
        onClose={()=>handleDrawerOpen()}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        
        <List>
        {menus?.map(item =>
          item?.submenu ? (
            <SubMenu classes={classes} menu={item} handleDrawerOpen={handleDrawerOpen}/>
          ) : (
            <ListItem button  component={NavLink} to={item?.link||'/'} activeClassName={classes.active} exact onClick={handleDrawerOpen}>
             
              <ListItemText  ><Typography variant='h6' style={{whiteSpace:'nowrap',textAlign:'center'}}>{item?.title}</Typography></ListItemText>
            </ListItem>
          )
        )}
        </List>
      </Drawer>
    )
}
const SubMenu = ({ classes, menu,handleDrawerOpen }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
    
      <ListItem >
        
        <ListItemText  >{menu?.title}</ListItemText>
          
       
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding >
          {menu?.submenu?.map(({ title,link }) => (
            <ListItem button  className={classes.nested} onClick={handleDrawerOpen} exact component={NavLink} to={link||'/'} activeClassName={classes.active}>
              <ListItemIcon color='inherit'>
                 <StarBorder/> 
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
        <Divider/>
      </Collapse>
    </>
  );
};
