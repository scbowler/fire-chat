import React from 'react';

export default props => (
    <ul ref={e => props.setRef(e)} className="side-nav" id="side-nav">
        {props.renderLinks()}
    </ul>
);
