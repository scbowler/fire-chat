import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <div className="not-found">
        <div>
            <h1>404 Page Not Found</h1>
            <h5><Link to="/">Go <i className="material-icons">home</i></Link></h5>
        </div>
    </div>
);
