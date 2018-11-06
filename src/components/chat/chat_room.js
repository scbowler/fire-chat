import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../general/header';
import Input from '../general/input';
import Loading from '../general/loading';

class ChatRoom extends Component {
    render(){
        return (
            <div>
                <Header>Chat Room</Header>
            </div>
        );
    }
}

export default connect(null)(ChatRoom);
