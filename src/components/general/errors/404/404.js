import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

export default props => (
    <div className="not-found">
        <div className="not-found-content">
            <h1>404 - Page Not Found</h1>
            <div className="center"><Link to="/"><i className="material-icons">home</i></Link></div>
        </div>
    </div>
);
