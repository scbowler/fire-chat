import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../general/header';
import './home.css';

const mapStateToProps = state => ({auth: state.user.auth});


export default connect(mapStateToProps)(({ auth }) => (
    <div className="home">
        <Header>Fire Chat</Header>
        <h4 className="center">Welcome to Fire Chat</h4>
        <h5 className="center">Navigate to the lobby to join a room and start chatting, or create your own room with a topic of your choosing.</h5>
        
        <div className="home-buttons">
            {
                auth
                    ? <div className="row center">
                        <Link to="/chat" className="btn btn-large blue lighten-2">Go To Chat Lobby</Link>
                    </div>
                    : <div className="row center">
                        <div className="col s12 m6">
                            <Link to="/account/sign-in" className="btn btn-large blue lighten-2">Sign In To Chat</Link>
                        </div>
                        <div className="col s12 m6">
                            <Link to="/account/create" className="btn btn-large blue lighten-2">Create Account</Link>
                        </div>
                    </div>
            }
        </div>
    </div>
));
