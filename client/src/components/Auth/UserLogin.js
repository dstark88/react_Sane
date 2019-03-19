import React, { Component } from 'react';
import Authcard from './Authcard';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid/index";
import { Input } from "../Form/index";




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
        <Container fluid>
            <Authcard title="Log In">
                <Row>
                    <Col size="md-12">
                        <form className="login-input" 
                            onSubmit={this.onSubmit}>
                            <Row>
                                <Col size="md-12">
                                    <label htmlFor="username" 
                                        className="text-right">Username:</label>
                                    <Input 
                                        type="text" 
                                        name="username" 
                                        placeholder="Enter username" 
                                        className="form-control" 
                                        onChange={this.onUsernameChange} 
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-12">
                                    <label htmlFor="password" 
                                    className="text-right">Password:</label>
                                    <Input 
                                        type="text" 
                                        name="password" 
                                        placeholder="Enter password" 
                                        className="form-control" 
                                        onChange={this.onPasswordChange} 
                                    />
                                </Col>
                            </Row> 
                            <Row>
                                <Col size="md-12" className="text-center">
                                    <button 
                                        type="submit" 
                                        value="Submit">
                                        <Link className="nav-link" to="/AddStories">Submit</Link>
                                    </button>       
                                    <button 
                                        onClick={this.onNewUserClick}>
                                        <Link className="nav-link" to="/Login">Sign Up</Link>
                                    </button> 
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </ Authcard>
        </Container>
        )
    }
}