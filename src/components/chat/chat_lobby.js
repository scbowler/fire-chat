import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../general/header';

class ChatLobby extends Component {
    render(){
        console.log(this.props);
        const { match: { path } } = this.props;

        return (
            <div>
                <Header>Chat Lobby</Header>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to={`${path}/create`} className="btn blue darken-4">New Room</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null)(ChatLobby);
