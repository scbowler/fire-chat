import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { signIn } from '../../actions';
import Header from '../general/header';
import Input from '../general/input';

class SignIn extends Component {
    render() {
        const { authError, handleSubmit, signIn } = this.props;

        return (
            <div>
                <Header>Sign In</Header>
                <div className="row">
                    <form onSubmit={handleSubmit(signIn)} className="col s12 m8 offset-m2">
                        <Field name="email" label="Email" component={Input} />
                        <Field name="password" label="Password" type="password" component={Input} />

                        <div className="row">
                            <div className="center col m6 s12">
                                <Link to="/" className="btn red darken-2">Cancel</Link>
                            </div>
                            <div className="center col m6 s12">
                                <button className="btn blue darken-4">Sign In</button>
                                <p className="red-text text-darken-2">{authError}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function validate({ email, password }) {
    const errors = {};

    if (!email) errors.email = 'Please enter your email address';
    if (!password) errors.password = 'Please select a password';

    return errors;
}

SignIn = reduxForm({
    form: 'sign-in',
    validate
})(SignIn);

export default connect(null, { signIn })(SignIn);
