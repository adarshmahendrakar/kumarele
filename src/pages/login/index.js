import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Postdata } from '../../api/Server';
import { toast } from 'react-toastify';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default ()=> {
  const classes = useStyles();
  const history=useHistory();
  const [data,setData]=useLocalStorage('usersList',[]);
  const [loginuser,setloginuser]=useLocalStorage('keploginuser',{})
  const initialValues={name:'',password:''}
const {values,handleInputChange,resetForm}=useForm(initialValues,false,{})


    
useEffect(()=>{
    Object.keys(loginuser||{}).length==0?'':history.push('/dashboard')
},[])

const handleSubmit=(e)=>{
    e.preventDefault();
    Postdata('/uuser/log','POST',values).then(d=>{
        if(d?.detail?.status==1){
          toast.success("login successfull")
          setloginuser(d.detail)
          history.push('/dashboard')
        }else{
            //alert(JSON.stringify(d))
            toast.error("login unsuccessfull")
        }
    });
    // const res=data?.filter(item=>item.name==values.name && item.password==values.password)
    // if(res?.length>0){
    //     toast.success("login successfull")
    //     setloginuser(res[0])
    //     history.push('/dashboard')
    // }else{
    //     toast.error("login unsuccessfull")
    // }

}


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}