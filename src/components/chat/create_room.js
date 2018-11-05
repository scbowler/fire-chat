import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Header from '../general/header';
import Input from '../general/input';

class CreateRoom extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <Header>Create Room</Header>
                <div className="row">
                    <form onSubmit={handleSubmit(console.log)} className="col s12 m8 offset-m2">
                        <Field name="name" label="Room Name" component={Input} />
                        <Field name="topic" label="Room Topic" component={Input} />
                        <Field name="description" label="Room Description" component={Input} />

                        <div className="row">
                            <div className="center col s6">
                                <Link to="/chat" className="btn red darken-2">Cancel</Link>
                            </div>
                            <div className="center col s6">
                                <button className="btn blue darken-4">Create Room</button>
                                <p className="red-text text-darken-2"></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function validate({ name, topic, description }) {
    const errors = {};

    if (!name) errors.name = 'Please give your room a name';
    if (!topic) errors.topic = 'Please give your room a topic';
    if (!description) errors.description = 'Please give your room a description';

    return errors;
}

CreateRoom = reduxForm({
    form: 'create-room',
    validate
})(CreateRoom);

export default connect(null)(CreateRoom);
