import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SideNav from './side_nav';
import './nav.css';

class Nav extends Component {
    state = {
        authLinks: [
            {to: '/lobby', name: 'Chat Lobby'},
            {to: '/profile', name: 'Profile'}
        ],
        links: [
            {to: '/', name: 'Home'},
            {to: '/sign-in', name: 'Sign In'},
            {to: '/sign-up', name: 'Sign Up'}
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
    
    renderLinks = () => {
        const { auth } = this.props;
        const { authLinks, links } = this.state;

        let linkElements = links.map(this.makeLink);

        if(auth){
            linkElements = [...linkElements, ...authLinks.map(this.makeLink)];
        }

        return linkElements;
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

export default Nav;
