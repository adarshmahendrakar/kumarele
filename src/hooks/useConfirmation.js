import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, makeStyles, IconButton, Button, AppBar, Toolbar } from '@material-ui/core'

import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';


const useStyles = makeStyles(theme => ({
    dialog: {
       // padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
        [theme.breakpoints.down('sm')]:{
            position:'relative',
            top:0
        }
    },
    dialogTitle: {
        padding:0,
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
}))
export  function useConfirmation(title,subTitle) {
    
    const [open, setOpen] = React.useState(false);
    const [onConfirm,setConfirm]=React.useState(()=>()=>{})
    const openConfirm = (callbak) => {setOpen(true);setConfirm(()=>callbak)};
  const setOpenPopup=()=>setOpen(false)
    const ConfirmPopup=()=><Popup onConfirm={onConfirm} title={title} subTitle={subTitle} openPopup={open} setOpenPopup={setOpenPopup} ></Popup>
    return {ConfirmPopup,openConfirm}
}

function Popup(props) {

    const { title, subTitle,onConfirm, openPopup, setOpenPopup,...other } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} classes={{ paper: classes.dialog }}>
        <DialogTitle className={classes.dialogTitle}>
           <AppBar position='static'>
               <Toolbar variant='dense'>
                    Delete Confirmation
                   </Toolbar>
           </AppBar>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography variant="subtitle2">
                {subTitle}
            </Typography>
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
            <Button
            variant='contained'
            style={{borderRadius:0,flex:1}}
                color="primary"
                onClick={setOpenPopup} >Cancel</Button>
                
            <Button
                variant='contained'
                style={{borderRadius:0,flex:1}}
                color="primary"
                onClick={()=>{onConfirm();setOpenPopup()}} >Delete</Button>
        </DialogActions>
    </Dialog>
    )
}