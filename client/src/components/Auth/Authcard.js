import React from 'react';
import './authcard.css';

const Authcard = props => {
return (
    <div className="card authScreen">
        <div className="title">
            <center>
            <h1>
                <strong> {props.title} </strong>
            </h1>
            </center>
        </div>
        <div className="login-group row">
            {props.children}        
        </div>
    </div>    
)
}

export default Authcard;
