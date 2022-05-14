import React from "react";
import { useSelector } from 'react-redux';
import useStyle from './styles';
import { CircularProgress, Grid } from '@material-ui/core'
import Post from './Post/Post';


const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyle();

    console.log(posts);


    return(


        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
               {Post.map((post) =>(
                   <Grid key={post.id}item xs={12} sm = {6}>
                       <Post post = {post} setCurrentId={setCurrentId} />

                    </Grid>


               ))} 
            </Grid>
        )
    ); 
}

export default Posts;