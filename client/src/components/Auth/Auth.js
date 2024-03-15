import useStyles from './styles';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import {signin,signup} from '../../actions/auth';
import React,{useState} from 'react'
const { Avatar, Button, Paper, Grid, Typography, Container } = require('@mui/material');
const { LockOutlined: LockOutlinedIcon } = require('@mui/icons-material');
const initialState={firstName:'',lastName:'',email: '',password: '',confirmPassword:''};
const Auth = () => {
    const classes=useStyles();
    const [showPassword,setshowPassword]=useState(false);

    const [isSignup,setisSignUp]=useState(false);
    const [formData,setformData]=useState(initialState); 
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleShowPassword=()=> setshowPassword((prevShowPassword)=> !prevShowPassword);
    const handleSubmit=(e)=>{
        e.preventDefault();
       if(isSignup){
        dispatch(signup(formData,navigate));
       }else{
        dispatch(signin(formData,navigate));
       }


    }
    const handleChange=(e)=>{
        setformData({ ...formData,[e.target.name]: e.target.value});

    }
    const switchMode =()=>{
        setisSignUp((previssignUp)=>!previssignUp)
         setshowPassword(false);

    }
    
  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
         <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
         </Avatar>
         <Typography variant="h5">{isSignup ?'Sign Up':'Sign In'}</Typography>
         <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {
                isSignup && (
                  <>
                  
                  < Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                  < Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                  </>  
                )
              }  
              < Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
              < Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text":"password"} handleShowPassword={handleShowPassword}/>
             {
                isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>
             }
            </Grid>
            
            <Button type="submit" fullWidth variant ="contained" color="primary" className={classes.submit}>
                {isSignup? 'Sign Up':'Sign In'}
            </Button>
            
            <Grid container justify="flex-end">
                <Grid item>
                    <Button onClick={switchMode}>
                        {isSignup?'Already have an account? Sign In':'Dont have an account? Sign Up'}
                    </Button>
                </Grid>
            </Grid>
         </form>
        </Paper>
    
    </Container>
  )
}

export default Auth
