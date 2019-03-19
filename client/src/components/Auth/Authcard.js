import React from 'react';
import './authcard.css';

const Authcard = props => {
return (
<div className="card authScreen col-md-4 offset-md-4">
    <div className="card-body row">
        <div className="title col-md-6 offset-md-3">
            <h1>
                <strong> {props.title} </strong>
            </h1>
        </div>
    </div>
        <div className="login-group row">
            {props.children}        
        </div>
    </div>    
)
}

export default Authcard;
