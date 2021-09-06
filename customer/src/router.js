import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App.js';
import Dashboard from './Dashboard/Dashboard.js';
import Customer from './Customer/Customer.js';
import ProfileChange from './Profile/ProfileChange.js';
import ProfileShow from './Profile/ProfileShow.js';
import Calendar from './Calendar/Calendar.js';
//import Chat from './Chat/Chat.js';
import Chat from './TeamChat/Chat/Chat.js';
import GroupBeforeChat from './Group/GroupBeforeChat.js';

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
                    <Route path="/calendar" exact component={Calendar}></Route>
                    <Route path="/group" exact component={GroupBeforeChat}></Route>
                    <Route path="/chat" exact component={Chat}></Route>
                    
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;