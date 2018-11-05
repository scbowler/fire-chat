import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.css';
import React from 'react';
import AppRoutes from './app_routes';
import Nav from './nav';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <AppRoutes/>
        </div>
    </div>
);

export default App;
