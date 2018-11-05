import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { clearAuthError } from '../actions';
import { greeting } from '../helpers';

export default (WrappedComponent, to = '/account/sign-in', requireAuth = true) => {
    class Auth extends Component {
        checkAuth() {
            const { auth, history } = this.props;

            if (auth !== requireAuth) {
                history.push(to);
            }
        }
        
        componentDidMount(){
            this.checkAuth();
        }

        componentDidUpdate(){
            this.checkAuth();
        }

        componentWillUnmount(){
            this.props.clearAuthError();
        }

        render(){
            const { username } = this.props;

            return (
                <Fragment>
                    <div className="grey-text right-align">{ username ? `${greeting()} ${username}` : null }</div>
                    <WrappedComponent {...this.props} />
                </Fragment>
            )
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.user.auth,
            authError: state.user.error,
            username: state.user.username
        }
    }

    return connect(mapStateToProps, { clearAuthError })(Auth);
}
