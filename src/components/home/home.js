import React from 'react';
import Header from '../general/header';
import './home.css';

export default props => (
    <div className="home">
        <Header>Fire Chat</Header>
        <h5 className="center">Welcome to <b>Fire Chat</b>. Navigate to the lobby and join a room to start chatting in, or create your own room with a topic of your choosing.</h5>

        <div className="row center home-icons">
            <div className="col s12 m4">
                <h1><i className="material-icons">account_box</i></h1>
                <p><b>Some Text Here</b></p>
            </div>
            <div className="col s12 m4">
                <h1><i className="material-icons">language</i></h1>
                <p><b>Some Text Here</b></p>
            </div>
            <div className="col s12 m4">
                <h1><i className="material-icons">insert_chart</i></h1>
                <p><b>Some Text Here</b></p>
            </div>
        </div>
    </div>
);
