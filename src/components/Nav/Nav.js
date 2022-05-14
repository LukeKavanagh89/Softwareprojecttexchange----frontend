import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import { link, useHistory, useLocation } from 'react-router-dom';
import logo from './images/logo.jpeg.png';
import { AppBar, Avatar, Typography, Button, toolbar  } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Nav = () => {

    const classes = useStyles();
    const [ user, setUser] = useState(JSON.parse(localStorage.getItem('Account')));
    const useDispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const logout = () =>{
      dispatch({ type: 'Sign Out' });

     history.push('/')

     setUser(null);
    };

    useEffect(() =>{
    const token = user?.token;

    //JWT - too see if token has expired
    if(token){
      const decodedToken = decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem('Account')))
    }, [location]);

 
     return (
    <AppBar className={classes.AppBar} position = "static" color='inherit'>

    <div className={classes.brandContainer}>
    <Typography component={link} to="/" className={classes.heading} varient="h2" align="center">T-Exchange</Typography>
    <img classesName={classes.image} src={logo} alt = "logo" height="60" />
    </div>
    <toolbar className={classes.toolbar}>
      {user ?(
          <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name}src ={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} varient="h6">{user.result.name}</Typography>
              <Button varient="contained" className={classes.logout} color="primary" onClick={logout}>Sign Out</Button>
          </div>
      ): (

        <Button component={link} to="/auth" varient="contained" color="primary">Log in</Button>

      )}
    </toolbar>

    
    

    </AppBar>
  );
}

export default Nav;