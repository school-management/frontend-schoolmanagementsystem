import React, { Component } from 'react';
import { BrowserRouter as RouteIt, Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Layout from '../layout/Layout';

class Router extends Component {
    render() {
        return (

            <RouteIt>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={Layout} />

                </Switch>
            </RouteIt>

        )
    }
}

export default Router;
