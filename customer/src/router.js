import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App.js';
import Dashboard from './Dashboard/Dashboard.js';
import Customer from './Customer/Customer.js';
import ProfileChange from './Profile/ProfileChange.js';
import ProfileShow from './Profile/ProfileShow.js';
import Calendar from './Calendar/Calendar.js';

class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/dashboard" exact component={Dashboard}></Route>
                    <Route path="/customer" exact component={Customer}></Route>
                    <Route path="/profileChange" exact component={ProfileChange}></Route>
                    <Route path="/profileShow" exact component={ProfileShow}></Route>
                    <Route path="/Calendar" exact component={Calendar}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;