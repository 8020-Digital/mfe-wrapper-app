import React from 'react';

import { Switch } from 'react-router-dom'

import ApolloAppRoutes from './ApolloAppRoutes'
import ReduxAppRoutes from './ReduxAppRoutes'

/**
 * @todo criar um arquivo para controlar as aplicações e abstrair a criação de rotas.
 */
export default () => (
    <Switch>
        <ReduxAppRoutes />
        <ApolloAppRoutes />
    </Switch>
);

