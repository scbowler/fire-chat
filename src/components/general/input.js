import React from 'react';

export default ({className, input, label, meta: {error, touched}, type}) => (
    <div className={`input-field ${className || ''}`}>
        <input {...input} type={type || 'text'} id={input.name} autoComplete="off"/>
        <label htmlFor={input.name}>{label}</label>
        <p className="red-text text-darken-2">{touched && error}</p>
    </div>
);
