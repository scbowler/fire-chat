import React from 'react';
import { Route, Switch } from 'react-router-dom';
import lazyLoad from '../../hoc/lazy_load';
import NotFound from '../general/errors/404';

export default props => {
    const { path } = props.match;

    return (
        <Switch>
            <Route path={`${path}/create`} component={lazyLoad({
                load: () => import('./create')
            })}/>
            <Route component={NotFound}/>
        </Switch>
    );
}
