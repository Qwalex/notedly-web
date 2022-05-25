import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home';
import Favorites from './favorites';
import MyNotes from './mynotes';
import NotFound from './notfound';

const Pages = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/mynotes" component={MyNotes} />
                <Route path="/favorites" component={Favorites} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Pages;