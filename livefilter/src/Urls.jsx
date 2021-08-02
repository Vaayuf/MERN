import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import App from './App.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Service from './Service.jsx';
import Search from './Search.jsx';
import Error from './Error.jsx';

const Urls = () =>{
    return(
        <>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/search' component={Search}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/service' component={Service}/>
            <Route component={Error}/>
            {/* <Redirect to="/"/> */}
        </Switch>
        </>
    );
}

export default Urls;