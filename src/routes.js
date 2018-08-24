import React, { Component} from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import homePage from './components/HomePage';
import PledgeClasses from './components/PledgeClasses';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={homePage}/>
        <Route path="/pledgeClasses" component={PledgeClasses}/>
    </Route>
);