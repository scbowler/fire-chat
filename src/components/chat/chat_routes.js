import React from 'react';
import { Route, Switch } from 'react-router-dom';
import auth from '../../hoc/auth';
import lazyLoad from '../../hoc/lazy_load';
import NotFound from '../general/errors/404';

export default props => {
    const { path } = props.match;

    return (
        <Switch>
            <Route exact path={path} component={
                auth(lazyLoad({
                    load: () => import('./chat_lobby')
                }))
            } />
            <Route path={`${path}/create`} component={
                auth(lazyLoad({
                    load: () => import('./create_room')
                }))
            } />
            <Route path={`${path}/:room-id`} component={
                auth(lazyLoad({
                    load: () => import('./chat_room')
                }))
            } />
            <Route component={NotFound} />
        </Switch>
    );
}
