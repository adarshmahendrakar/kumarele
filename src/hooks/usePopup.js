import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, Divider, AppBar, IconButton, Toolbar } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
       // padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
       
    },
    dialogTitle: {
        padding:0
    }
}))
export  function usePopup(title) {
    
    const [open, setOpen] = React.useState(false);
    const openDialog = () => setOpen(v=>!v);
  
    const MyPopup=({children,...other})=><Popup title={title} openPopup={open} setOpenPopup={setOpen} {...other}>{children}</Popup>
    return {MyPopup,openDialog}
}

function Popup(props) {

    const { title, children, openPopup, setOpenPopup,...other } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup}   classes={{ paper: classes.dialogWrapper }} {...other}>
            
            <DialogTitle className={classes.dialogTitle}>
                <AppBar position='static'>
                <Toolbar variant='dense'>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <IconButton
                        color="secondary"
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                </AppBar>
            </DialogTitle>
            <Divider/>
            <DialogContent >
                
                {children}
            </DialogContent>
        </Dialog>
    )
}