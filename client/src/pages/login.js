import React, { Component } from "react";
import { Button, ButtonToolbar, Form } from "react-bootstrap";
import "./login.css";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div id="Login">
                <h1>TeachHub</h1>
                <h3>User Login</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            placeholder="Enter your email address"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <ButtonToolbar>
                        <Button
                            variant="primary"
                            type="submit"
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                        >
                            Login
                        </Button>
                    </ButtonToolbar>
                </Form>
                <ButtonToolbar>
                    <Button
                        variant="outline-danger"
                        type="button"
                        href="/forgot_pw"
                    >
                        Forgot the password
                    </Button>
                </ButtonToolbar>
                <ButtonToolbar>
                    <Button
                        variant="outline-success"
                        type="button"
                        href="/register"
                    >
                        Don't have an account? Click here to register!
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}

export default Login;
