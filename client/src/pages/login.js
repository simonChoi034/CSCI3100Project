import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import "./login.css";
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: false,
            error_message: ''
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        const self = this;
        axios.post('/api/user/login', user)
            .then(res => {
                this.props.history.push('/');
            })
            .catch(function (err) {
                const errors = err.response.data.errors;

                self.setState({
                    error: true,
                    error_message: errors[0].msg
                });
                console.log(errors)
            })
    };

    render() {
        return (
            <div id="Login">
                <h1>TeachHub</h1>
                <h3>User Login</h3>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email address</Label>
                        <Input
                            autoFocus
                            type="email"
                            name='email'
                            id='email'
                            placeholder="Enter your email address"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    {
                        this.state.error ?
                            <Alert variant='danger'>
                                {this.state.error_message}
                            </Alert> : null
                    }
                    <FormGroup>
                        <Button
                            color="primary"
                            size="lg"
                            block
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Login
                    </Button>
                    </FormGroup>
                    <FormGroup>
                        <Button
                            color="danger"
                            size="lg"
                            className="float-left"
                            href="/forget_pw"
                        >
                            Forget password
                        </Button>
                        <Button
                            color="success"
                            size="lg"
                            className="float-right"
                            href="/register"
                        >
                            Register now
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Login;
