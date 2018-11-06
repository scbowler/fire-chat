import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getChatLog, getRoomInfo, sendMessage } from '../../../actions';
import Header from '../../general/header';
import Input from '../../general/input';
import Loading from '../../general/loading';
import './chat_room.css';

class ChatRoom extends Component {
    componentDidMount(){
        this.scrollTop();

        this.roomRef = this.props.getRoomInfo(this.props.match.params.room_id);
    }

    componentDidUpdate(prevProps){
        const { getChatLog, roomInfo } = this.props;
        
        if(!prevProps.roomInfo && roomInfo && roomInfo.logId){
            this.logRef = getChatLog(roomInfo.logId);
        }
    }

    componentWillUnmount(){
        if(this.roomRef){
            this.roomRef();
        }
        if(this.logRef){
            this.logRef();
        }
    }

    handleSendingMessage = async ({message}) => {
        const { roomInfo, reset, sendMessage } = this.props;

        await sendMessage(message, roomInfo.logId);

        this.scrollTop();

        reset();
    }

    scrollTop(){
        this.chat.scrollTop = this.chat.scrollHeight;
    }

    renderMessages(){
        const { messages, uid } = this.props;

        if(!messages){
            return <Loading container/>
        }

        if(!messages.length){
            return <h5 className="center grey-text text-lighten-2">No Messages</h5>;
        }

        return messages.map( ({id, message, name, ts, uid: mUid}) => {
            const isThisUser = uid === mUid;
            
            return (
                <div key={id} className="chat-row">
                    <div className={`chat-bubble ${isThisUser ? 'this-user' : ''}`}>
                        <div className="name">{isThisUser ? 'You' : name}</div>
                        <div className="message">{message}</div>
                    </div>
                </div>
            );
        });
    }

    render(){
        const { roomInfo, handleSubmit } = this.props;

        return (
            <div className="chat-room">
                <Header>{roomInfo ? roomInfo.name : 'Chat Room'}</Header>
                <div ref={ e => this.chat = e} className="chat-container">
                    {this.renderMessages()}
                </div>

                <div className="message-input-container">
                    <form onSubmit={handleSubmit(this.handleSendingMessage)} className="message-input">
                        <Field name="message" label="New Message" component={Input} />
                        <button className="btn btn-floating blue lighten-2 send-message"><i className="material-icons">send</i></button>
                    </form>
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        messages: state.chat.messages,
        roomInfo: state.chat.currentRoom,
        uid: state.user.uid
    }
}

ChatRoom = reduxForm({
    form: 'chat-message'
})(ChatRoom);

export default connect(mapStateToProps, { getChatLog, getRoomInfo, sendMessage })(ChatRoom);
