import React, { Component } from 'react';
import Authcard from './Authcard';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          signUpError: null,
          signUpErrorMsg: null
        };
        this.submitHandler = this.submitHandler.bind(this);
        this.signIn = this.signIn.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
      };   

    submitHandler = (event) => {
        event.preventDefault();
        let user = this.state;
        axios.post('/api/users/signup', { user })
            .then(response => {
                console.log("Response status", response.data);
                console.log("sign up request sent", response);
                this.props.onSignUp(response.data.user);
            })
        .catch(err => {
            if (err.response){
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers)
            }
            if (err.response.status === 409) {
                let errorType = err.response.data.type;
                let errorMsg = err.response.data.message;
                this.setState({
                    signUpError: errorType,
                    signUpErrorMsg: errorMsg
                });
                console.log(this.state.signUpError);
            }
        });
    };

    signIn(){
        this.props.signInClick();
    }
    onUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
        console.log(this.state, "this.state in onusernamechange");
    };

    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    };

    componentDidMount() {
    };

    render() {
        return (
            <Authcard title="Sign Up">
                <form className="col-md-12 login-input" 
                    onSubmit={this.submitHandler}>
                    <div className="row mb-3">
                        <label htmlFor="username" 
                            className="col-md-4 text-right">Username:</label>
                        <div className="col-md-8">
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="username" 
                                className="form-control" 
                                onChange={this.onUsernameChange} 
                            />
                            {this.state.signUpError === "username" ? 
                                <div class="alert alert-warning" role="alert">
                                    {this.state.signUpErrorMsg}
                                </div>
                            :
                                null
                            }
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="password" 
                            className="col-md-4 text-right">Password:</label>
                        <div className="col-md-8">
                            <input 
                                type="text" 
                                name="password" 
                                placeholder="password" 
                                className="form-control" 
                                onChange={this.onPasswordChange} 
                            />
                            {this.state.signUpError === "password" ? 
                                <div class="alert alert-danger" role="alert">
                                    Your password must be atleast 6 characters long and no longer than 15 characters.
                                </div>
                            :
                                null
                            }
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-12 text-center mb-1">
                            <button 
                                type="submit" 
                                className="btn btn-primary mt-2" 
                                value="Sign Up!" >
                                <Link className="nav-link" to="#">Submit</Link>
                            </button>       
                            <button 
                                className="btn btn-info" 
                                onClick={this.signIn}>
                                <Link className="nav-link" to="/Login">Sign In!</Link>
                            </button>
                        </div>
                    </div>
                </form>
            </ Authcard>
        )
    }
}