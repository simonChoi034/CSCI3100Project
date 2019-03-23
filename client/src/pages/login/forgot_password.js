import React, { Component } from "react";
import { Button, ButtonToolbar, Form } from "react-bootstrap";
import "./forgot_password.css";

class Forgot_PW extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: ''
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.username.length > 0;
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
            <div className="Login">
                <h1>Forgot and Reset Password</h1>
                <h6> A reset password will be sent to your email !</h6>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            autoFocus
                            type="username"
                            placeholder="Enter your username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email address"
                            value={this.state.email}
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
                            Send
                        </Button>
                    </ButtonToolbar>
                </Form>
            </div>
        );
    }
}

export default Forgot_PW;