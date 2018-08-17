import React, { Component} from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import homePage from './components/HomePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={homePage}/>
    </Route>
);