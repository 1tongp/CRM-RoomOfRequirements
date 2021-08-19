import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App.js';

class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;