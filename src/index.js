import 'materialize-css/dist/js/materialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import think from './middleware/think';
import { authChange } from './actions';
import types from './actions/types';

import App from './components/app';

const store = createStore(rootReducer, {}, applyMiddleware(think));

if(localStorage.getItem('chat-uid')){
    store.dispatch({type: types.SIGN_IN});
}

authChange(store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
