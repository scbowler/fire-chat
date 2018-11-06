import React from 'react';
import { Link  } from 'react-router-dom';

export default ({created, description, id, name, topic, users}) => (
    <li className="collection-item">
        <div className="row grey-text text-lighten-1">
            <div className="col s5">NAME</div>
            <div className="col s5">TOPIC</div>
            <div className="col s2">USERS IN CHAT</div>
        </div>

        <div className="row">
            <div className="col s5">
                <h5>{name}</h5>
            </div>
            <div className="col s5">
                <h5 className="grey-text text-darken-2">{topic}</h5>
            </div>
            <div className="col s2">
                <h5 className="grey-text text-darken-2">{users.length}</h5>
            </div>
        </div>

        <div className="row">
            <div className="col s9 grey-text">
                <p>{description}</p>
            </div>
            <div className="col s3 center-align">
                <Link className="btn green" to={`/chat/${id}`}>Join</Link>
            </div>
        </div>

        <p className="right-align grey-text text-lighten-1">Created @ {created.toLocaleString()}</p>
    </li>
);
