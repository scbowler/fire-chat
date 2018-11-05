import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { createAccount } from '../../actions';
import Header from '../general/header';
import Input from '../general/input';

class AccountCreate extends Component {
    render(){
        const { authError, createAccount, handleSubmit } = this.props;

        return (
            <div>
                <Header>Create Account</Header>
                <div className="row">
                    <form onSubmit={handleSubmit(createAccount)} className="col s12 m8 offset-m2">
                        <Field name="username" label="Username" component={Input}/>
                        <Field name="email" label="Email" component={Input}/>
                        <Field name="password" label="Password" type="password" component={Input}/>
                        <Field name="confirmPassword" label="Confirm Password" type="password" component={Input} />

                        <div className="row">
                            <div className="center col m6 s12">
                                <Link to="/" className="btn red darken-2">Cancel</Link>
                            </div>
                            <div className="center col m6 s12">
                                <button className="btn blue darken-4">Sign Up</button>
                                <p className="red-text text-darken-2">{authError}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function validate({username, email, password, confirmPassword}){
    const errors = {};

    if(!username) errors.username = 'Please select an username';
    if(!email) errors.email = 'Please enter your email address';
    if(!password) errors.password = 'Please select a password';
    else if(password.length < 6) errors.password = 'Password must be at least 6 characters long';
    if(password !== confirmPassword) errors.confirmPassword = 'Passwords must match';

    return errors;
}

AccountCreate = reduxForm({
    form: 'sign-up',
    validate
})(AccountCreate);

export default connect(null, { createAccount })(AccountCreate);
