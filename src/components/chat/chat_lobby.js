import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../general/header';

class ChatLobby extends Component {
    render(){
        return (
            <div>
                <Header>Chat Lobby</Header>
            </div>
        );
    }
}

export default connect(null)(ChatLobby);
