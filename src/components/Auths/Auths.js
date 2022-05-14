import React, { useState }from 'react';
import Input from './Input';
import { Avatar, Button, Paper, Grid, Typography, Container, Textfield } from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { LockOutlined } from '@material-ui/icons';
import { GoogleLogin } from 'react-google-login';
import { render } from 'react-dom/cjs/react-dom.development';
import { Icon } from 'carbon-components-react';
import symbol from './symbol';
import { useDispatch } from 'react-redux';
import { signin, signup} from '../../Actions/auth';


const initialState = { FirstName: '', LastName: '', email: '', Passwordconfirm: ''}
const Auths = () => {
    const useDispatch = useDispatch();
    const classes = useStyles();
    const [LogIn, setLogin] = useState(false);
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = (e) =>{
        e.preventDefault();

     if(LogIn) {
        dispatch(signup(formData, history))
     } else {
        dispatch(signin(formData, history))
     }
    };


    const handlechange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
      };

      const googleSucess = async (response) => {
        const result  = response?.profileObj;
        const token = response?.tokenId;

        try {
            dispatch({ type: 'AUTH', data:{ result, token }});

          history.push('/');
        } catch (error) {
            console.log(error)
            
        }
      }
      const googleFailure = (error) =>{
          console.log(error);
          console.log("You're Google Sign In was unsucessful. Please try again")
      };
    


  return (
      <Container component="main" maxWidth ="xs">
          <Paper className={classes.paper} elevation={3}>
              <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
              </Avatar>
              <Typography varient = "h4">{LogIn ? 'Log In' : 'Log In '}</Typography>
              <form cklassName={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={2}>

                      {
                          LogIn && (
                              <>
                
                              <Input name ="FirstName" label="First Name" handlechange={handlechange} autoFocus half />
                              <Input name ="LastName" label="Last Name" handlechange={handlechange} autoFocus half />

                              </>
                          )}
                          <Input name ="email" label = "Email Address" handleChange={handleChange} type= "email" />
                          <Input name ="password" label = "Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                          { LogIn && <Input name="confirmPassword" label="Retry Password" handleChange={handleChange} type="password"/> 
                          }
                  </Grid>
                  <Button type="submit" fullWidth variant="contained" color="primary" className={classses.submit}>
                  {LogIn ? 'Sign up' : 'Log in'}
                  </Button>
                  
                  <GoogleLogin
                  clientId="906644944130-itrq4h8goe4934eos1tl6b8366uoo95t.apps.googleusercontent.com"
                  render={(renderProps) => (
                        <Button className={classes.googleButton} color = 'Secondary' fullWidt onClick={renderProps.onClick} disabled ={renderProps.disabled} startIcon={<Icon/>} varient="contained"> Sign In - Google</Button>
                  )}


                  onSuccess={googleSucess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                  />

                  <Grid container justify="flex-end">
                      <Grid item>
                          <Button onClick={switchMode}>
                              {LogIn ? 'Account has already been made! Sign in' : 'Account hasnt been made, Sign Up!' }
                          </Button>
                      </Grid>
                  </Grid>
              </form>

          </Paper>

      </Container>
  )
}

export default Auths;