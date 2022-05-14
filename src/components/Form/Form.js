import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import fileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import useStyles from './styles';
import {createPost, updatePost} from '../../Actions/posts';

// Getting the current ID


const Form = ({ currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({ Name:'', Event:'', message:'', Price:'', selectedFile:''});
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id = currentId) : null);

    useEffect(() => {
        if(post) setPostData(post);

    }, [post]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if(setCurrentId === 0){
            dispatch(createPost({ ...postData, Name: user?.result?.name}));
            clear()
        } else{
            dispatch(updatePost(currentId, {...postData, Name: user?.result?.name}));
            clear()
        }

    }
    const clear = () =>{
        setCurrentId(null);
        setPostData({ Name:'', Event:'', message:'', Price:'', selectedFile:''});

    }

    return( 
        <Paper className={classes.Paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">${currentId ? 'Updating' : 'Creating'} your event</Typography>
                <TextField name="Name"  variant="outlined"  label="Name"  fullWidth value={postData.Name} onChange={(e) => setPostData({ ...postData, Name: e.target.value })}/>
                <TextField name="Event"  variant="outlined"  label="Event"  fullWidth value={postData.Event} onChange={(e) => setPostData({ ...postData, Event: e.target.value })}/>
                <TextField name="Email"  variant="outlined"  label="Email"  fullWidth value={postData.Email} onChange={(e) => setPostData({ ...postData, Email: e.target.value })}/>
                <TextField name="Price"  variant="outlined"  label="Price"  fullWidth value={postData.Price} onChange={(e) => setPostData({ ...postData, Price: e.target.value })}/>
                <div className={classes.fileInput}><fileBase  type="file"  multiple={false}  onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/>#

                /* Buttons */
                <button className={classes.buttonSubmit} variant= "Container" color="primary" size="large" type="submit" fullWidth>Submit
                <button  variant= "Content" color="secondary" size="small" onClick={clear} fullWidth>clear
                </button>
                </button>
                 </div>
            </form>
         </Paper>
    ); 
}

export default Form;