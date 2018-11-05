import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Header from '../general/header';
import Input from '../general/input';

class AccountCreate extends Component {
    render(){
        return (
            <div>
                <Header>Create Account</Header>
                <div className="row">
                    <form className="col s12 m8 offset-m2">
                        <Field name="email" label="Email" component={Input}/>
                    </form>
                </div>
            </div>
        );
    }
}

AccountCreate = reduxForm({
    form: 'sign-up'
})(AccountCreate);

export default connect(null)(AccountCreate);
