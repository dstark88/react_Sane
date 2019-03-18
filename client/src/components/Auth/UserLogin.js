import React, { Component } from 'react';
import Authcard from './Authcard';
import axios from 'axios';
import { Link } from "react-router-dom";


export default class UserLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '', 
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onNewUserClick = this.onNewUserClick.bind(this);
    };

    componentDidMount(){
    };

    onSubmit(event){
        event.preventDefault();
        axios.get('/api/users/login', {
            params: this.state
        })
        .then((res) => {
            console.log(res);
            if(res.data.success === true){
                console.log("response", res);
                this.props.onLoggedIn(res.data.user);
            }
            
        });
    };

    onUsernameChange(event){
        this.setState({
            username: event.target.value
        });
    };

    onPasswordChange(event){
        this.setState({
            password: event.target.value
        });
    };

    onNewUserClick(){
        this.props.signUpClick();
    }

    render(){
        return(
            <Authcard title="Log In">
                <form className="col-md-12 login-input" 
                    onSubmit={this.onSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="username" 
                            className="col-md-4 text-right">Username:</label>
                        <div className="col-md-8">
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Enter username" 
                                className="form-control" 
                                onChange={this.onUsernameChange} 
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="password" 
                            className="col-md-4 text-right">Password:</label>
                        <div className="col-md-8">
                            <input 
                                type="text" 
                                name="password" 
                                placeholder="Enter password" 
                                className="form-control" 
                                onChange={this.onPasswordChange} 
                            />
                        </div>
                    </div> 
                    <div className="row mb-2">
                        <div className="col-md-12 text-center mb-1">
                            <button 
                                type="submit" 
                                value="Submit">
                                <Link className="nav-link" to="/AddStories">Submit</Link>
                            </button>
                            <button 
                                onClick={this.onNewUserClick}>
                                <Link className="nav-link" to="/Login">Sign Up!</Link>
                            </button> 
                        </div>
                    </div>
                </form>
            </ Authcard>    
        )
    }
}