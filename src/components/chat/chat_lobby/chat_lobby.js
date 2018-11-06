import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoomList } from '../../../actions';
import { Link } from 'react-router-dom';
import Header from '../../general/header';
import Loading from '../../general/loading';
import RoomInfo from './room_info';

class ChatLobby extends Component {
    componentDidMount(){
        this.roomRef = this.props.getRoomList();
    }

    componentWillUnmount(){
        if(this.roomRef){
            this.roomRef();
        }
    }

    renderRooms(){
        const { rooms } = this.props;

        if(!rooms){
            return (
                <div style={{ position: 'relative' }}>
                    <Loading container />
                </div>
            )
        }

        if(!rooms.length){
            return <h1 className="center grey-text text-lighten-2">No Rooms Available</h1>;
        }

        return (
            <ul className="collection">
                {
                    rooms.map(room => (
                        <RoomInfo key={room.id} {...room} created={room.created.toDate()} />
                    ))
                }
            </ul>
        );
    }

    render(){
        const { match: { path } } = this.props;

        return (
            <div>
                <Header>Chat Lobby</Header>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to={`${path}/create`} className="btn blue darken-4">New Room</Link>
                    </div>
                </div>
                {this.renderRooms()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        rooms: state.chat.chatRooms
    }
}

export default connect(mapStateToProps, { getRoomList })(ChatLobby);
