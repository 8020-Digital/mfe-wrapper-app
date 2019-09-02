import React from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import MicroFrontend from './MicroFrontend'

const Browse = ({ history }) => (
    <MicroFrontend history={history} name="Browse" host={"http://localhost:3001"} />
);
const Restaurant = ({ history }) => (
    <MicroFrontend history={history} name="Restaurant" host={"asdf"} />
);

/**
 * @todo criar um arquivo para controlar as aplicações e abstrair a criação de rotas.
 */
export default () => (
    <Switch>
        <Route exact path="/" component={Browse} />
        <Route exact path="/route1" component={Browse} />
        <Route exact path="/route2" component={Browse} />
        <Route exact path="/route3" component={Browse} />
        <Route exact path="/route4" component={Browse} />
        <Route exact path="/restaurant/:id" component={Restaurant} />
    </Switch>
);

