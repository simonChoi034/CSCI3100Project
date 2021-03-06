import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert, Container } from "reactstrap";
import "./Login.css";
import axios from 'axios';
import { authenticationService } from "../components/auth/authentication.service";

class Login extends Component {

    constructor(props) {
        super(props);

        // initialize the states for this components
        this.state = {
            email: "",
            password: "",
            error: false,
            error_message: ''
        };

        if (authenticationService.currentUserValue) {
            this.props.history.push('/');
        }
    }

    // validate the form
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    // set all the changed fields of the form to the states of this component
    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
    }

    // post the input data to server for checking
    handleSubmit = event => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        const self = this;
        authenticationService.login(email, password)
            .then(function () {
                self.props.history.push('/');
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
            <div id="Login" className="py-5">
                <h1>TeachHub</h1>
                <h3>User Login</h3>
                <Container fluid>
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
                                <Alert color='danger'>
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
                                outline
                                block
                                color="success"
                                size="lg"
                                className="float-left"
                                href="/register"
                            >
                                Register now
                            </Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Login;
