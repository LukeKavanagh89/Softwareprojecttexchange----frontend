import React from 'react'
import {Grid, IconButton, InputAdornment  } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Textfield from '@material-ui/core/TextField';


const Input = ({ name, handleChange, label, autoFocus, type, handleShowPasssword, half }) => {
  return (
   <Grid item xs={12} sm={6}>


       <Textfield
            name={name}
            onChange={handleChange}
            varient="outlined"
            required
            fullWidth
            label={label}
            autofocus={autofocus}
            type={type}
            InputProps={name === 'password' ? {

                endAdornment:(
                    <InputAdornment position="end"> 
                        <IconButton>
                            {type === "password" ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ), 
            } : null}
       
       />
   </Grid>
  )
}

export default Input