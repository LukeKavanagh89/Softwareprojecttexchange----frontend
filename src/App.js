import React from 'react';
import { Container } from '@material-ui/core';
import logo from './images/logo.jpeg.png';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home.js';
import Auths from './components/Auths/Auths';



const App = () => (
    <BrowserRouter>
    

        <Container maxidth="lg">
            <Switch>
                <Route path="/" exact component={home} />
                <Route path="/auths" exact component={Auths} />
            </Switch>
            <Home/>
        </Container>
        </BrowserRouter>

    );
 
export default App;