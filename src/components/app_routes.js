import React from 'react';
import { Route, Switch } from 'react-router-dom';
import lazyLoad from '../hoc/lazy_load';
import NotFound from './general/errors/404';

export default props => (
    <Switch>
        <Route exact path="/" component={lazyLoad({ 
            load: () => import('./home')
        })}/>
        <Route path="/account" component={lazyLoad({
            load: () => import('./account')
        })} />
        <Route component={NotFound}/>
    </Switch>
);
