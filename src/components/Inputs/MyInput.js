import { Box, Button, makeStyles, TextField, Typography, useTheme } from '@material-ui/core'
import React from 'react'
import Select, { components } from "react-select";
export function MyInput({label,...other}) {
    return (
        <Box mb={1}>
            <Typography gutterBottom variant='body2'>{label}</Typography>
            <TextField size='small' variant='outlined' color='primary' fullWidth {...other}/>
        </Box>
    )
}
const mystyles=makeStyles(theme=>({
    root:{
        display:'flex',
        alignItems:'center',
        '&>*':{margin:'0 20px',textAlign:'right',minWidth:'100px'},
        [theme.breakpoints.down('sm')]:{
            display:'block',
            '&>*':{marginBottom:'3px',textAlign:'left'}
        }
    },
  
}))
export  function MyInput1({label,...other}) {
    const classes=mystyles();
    return (
        <Box mb={1} className={classes.root}>
            <Typography variant='body2'>{label+":"}</Typography>
            <TextField size='small' variant='outlined' color='primary' fullWidth {...other}/>
        </Box>
    )
}

export  function Submit({text,...other}) {
    return (
       <Button type='submit' variant='contained' style={{backgroundColor:'#3f51b5',color:'white'}} {...other}>{text}</Button>
    )
}

const customStyles = {
    option: (provided, state) => ({
      ...provided,
     
      textAlign:'left'
    }),
    control: (base, state) => ({
        ...base,
       
        '&:hover': {
            border: '1px solid black'
        },
        '&:focus': {
            border: '1px solid black'
        }
    })
  }
  
export function MySelect({label,...props}){
    const myTheme=useTheme()
    const classes=mystyles();
    return <Box mb={1}>
    <Typography variant='body2'>{label}</Typography>
    <Box flex={1}><Select theme={theme=>({...theme,colors:{...theme.colors,primary:myTheme.palette.primary.main}})}   styles={customStyles}    {...props}/></Box>
    </Box>
}