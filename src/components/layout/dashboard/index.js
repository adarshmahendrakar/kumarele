import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PageContent from './PageContent';
import Sidebar from './Sidebar';
import Header from './Header';
const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems:'strech'
  },
  appBar: {
    backgroundColor:theme.palette.background.paper,
    color:'#000',
    zIndex:theme.zIndex.drawer+1
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:theme.palette.background.paper,
    color:'#000'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
   // justifyContent: 'flex-end',
  },
  content: {
    backgroundColor:theme.palette.background.paper,
    color:'#000',
    minHeight:'100vh',  
    flexGrow: 1,
    //padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  active:{
    backgroundColor:theme.palette.primary.dark,
    '&:hover':{
      backgroundColor:theme.palette.primary.dark,
    }
  }
}));

export default function DashboardLayout({menus,children}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
   
    setOpen(v=>!v);
  };
  return (
    <div className={classes.root}>
   
      <Header classes={classes} handleDrawerOpen={handleDrawerOpen}/>
      <Sidebar open={open} classes={classes} menus={menus} handleDrawerOpen={handleDrawerOpen}/>
      <PageContent open={open} classes={classes}>
        {children}
          </PageContent>
    </div>
  );
}
