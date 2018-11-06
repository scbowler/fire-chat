import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRoomInfo } from '../../actions';
import Header from '../general/header';
import Input from '../general/input';
import Loading from '../general/loading';

class ChatRoom extends Component {
    componentDidMount(){
        this.props.getRoomInfo(this.props.match.params.room_id);
    }

    render(){
        return (
            <div>
                <Header>Chat Room</Header>
            </div>
        );
    }
}

export default connect(null, { getRoomInfo })(ChatRoom);
