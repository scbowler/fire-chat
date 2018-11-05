import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import SideNav from './side_nav';
import './nav.css';

class Nav extends Component {
    state = {
        links: [
            {to: '/', name: 'Home'},
        ],
        guestLinks: [
            { to: '/account/sign-in', name: 'Sign In' },
            { to: '/account/create', name: 'Sign Up' }
        ],
        userLinks: [
            { to: '/chat/lobby', name: 'Chat Lobby' },
            { to: '/account/profile', name: 'Profile' }
        ],
        sideNavRef: null
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.sideNavRef && !prevState.sideNavRef){
            M.Sidenav.init(this.state.sideNavRef);
        }
    }

    setSideNavRef = e => {
        const { sideNavRef } = this.state;

        if(!sideNavRef){
            this.setState({
                sideNavRef: e
            });
        }
    }

    makeLink({to, name}){
        return (
            <li key={to}>
                <Link to={to}>{name}</Link>
            </li>
        );
    }

    signOutElement(){
        return (
            <li key="/sign-out" className="center">
                <button onClick={this.props.signOut} className="btn blue lighten-2">Sign Out</button>
            </li>
        );
    }
    
    renderLinks = () => {
        const { auth } = this.props;
        const { links, guestLinks, userLinks } = this.state;

        let linkElements = links.map(this.makeLink);

        if(auth){
            return [...linkElements, ...userLinks.map(this.makeLink), this.signOutElement()];
        }

        return [...linkElements, ...guestLinks.map(this.makeLink)];
    }

    render(){
        return (
            <Fragment>
                <nav className="chat-nav blue darken-4">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Fire Chat</Link>
                        <a href="#" data-target="side-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {this.renderLinks()}
                        </ul>
                    </div>
                </nav>

                <SideNav setRef={this.setSideNavRef} renderLinks={this.renderLinks}/>
            </Fragment>
            
        );
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, { signOut })(Nav);
