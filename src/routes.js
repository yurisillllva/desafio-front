import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
//import {Switch} from 'react-router-dom'; 


import Header from './components/Header';

import Home from './pages/Home';
import Product from './pages/Product';



const Routes = () => {
    return(
        <BrowserRouter>
          <Header/>
          <Switch>  
            <Route exact path="/" component={Home} />
            <Route exact path="/products/:id" component={Product} />
            </Switch> 
        </BrowserRouter>
    )
}

export default Routes; 