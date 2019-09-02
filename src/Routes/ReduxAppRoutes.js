import React from 'react';

import { Route, Switch } from 'react-router-dom'

import MicroFrontend from '../MicroFrontend'

const appName = "ReduxApp"
const appHost = "http://appreact.8020digital.com.br"

const ReduxApp = ({ history }) => (<MicroFrontend history={history} name={appName} host={appHost} />);

export default () => (
    <Switch>
        <Route exact path="/" component={ReduxApp} />
        <Route exact path="/route1" component={ReduxApp} />
        <Route exact path="/route2" component={ReduxApp} />
        <Route exact path="/route3" component={ReduxApp} />
        <Route exact path="/route4" component={ReduxApp} />
    </Switch>
)