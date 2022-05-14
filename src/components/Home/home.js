import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import { useDispatch } from 'react-redux';
import Form from '../Form/Form';
import { Container, Grow, Grid } from '@material-ui/core';
import { getPosts } from '../../Actions/posts';

const home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatchEvent((getPosts));
    }, [currentId, dispatch]);

    return(
       
    <Grow in> 
    <Container>
        
       <Grid className={classes.mainContent} container direction="column-reverse" justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm = {7}>
              <Posts setCurrentId={setCurrentId} />
       </Grid>
       <Grid item xs={12} sm = {4}>
              <form currentId={currentId} setCurrentId={setCurrentId} />
       </Grid>
      </Grid>
   </Container>
   </Grow>
    );
};



export default home;