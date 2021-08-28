import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App.js';
import Dashboard from './Dashboard/Dashboard.js';
import Customer from './Customer/Customer.js';
class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/dashboard" exact component={Dashboard}></Route>
                    <Route path="/customer" exact component={Customer}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;