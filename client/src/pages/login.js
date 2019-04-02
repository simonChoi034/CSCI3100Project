import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./login.css";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
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
                    <FormGroup controlId="email">
                        <Label>Email address</Label>
                        <Input
                            autoFocus
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email address"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button
                        color="primary"
                        size="lg"
                        block
                        disabled={!this.validateForm()}
                    >
                        Login
                    </Button>
                    <FormGroup>
                        <Button
                            color="danger"
                            size="lg"
                            className="float-left"
                            href="/forgot_pw"
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
