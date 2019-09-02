import React from 'react';

import { Route, Switch } from 'react-router-dom'

import MicroFrontend from '../MicroFrontend'

const appName = "Browse"
const appHost = "http://localhost:3002"

const Restaurant = ({ history }) => (<MicroFrontend history={history} name={appName} host={appHost} />);

export default () => (
    <Switch>
        <Route exact path="/restaurant/:id" component={Restaurant} />
    </Switch>
)