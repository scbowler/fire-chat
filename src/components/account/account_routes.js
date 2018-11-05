import React from 'react';
import { Route, Switch } from 'react-router-dom';
import auth from '../../hoc/auth';
import lazyLoad from '../../hoc/lazy_load';
import NotFound from '../general/errors/404';

export default props => {
    const { path } = props.match;

    return (
        <Switch>
            <Route path={`${path}/create`} component={
                auth(lazyLoad({
                    load: () => import('./create')
                }), '/chat', false)
            }/>
            <Route path={`${path}/sign-in`} component={
                auth(lazyLoad({
                    load: () => import('./sign_in')
                }), '/chat', false)
            } />
            <Route component={NotFound}/>
        </Switch>
    );
}
