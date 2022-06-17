import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home';
import Favorites from './favorites';
import MyNotes from './mynotes';
import NotePage from './note';
import NotFound from './notfound';

import Layout from '../components/Layout';

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/mynotes" component={MyNotes} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/note/:id" component={NotePage} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default Pages;