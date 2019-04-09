import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./ForgetPassword.css";

class Forget_PW extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.username.length > 0;
    }

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div id="Reset_pw">
                <h1>Reset Password</h1>
                <h6> The new password will be sent to you via email !</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username">
                        <Label>Username</Label>
                        <Input
                            autoFocus
                            type="username"
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <Label>Email address</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email address"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="send_btn">
                        <Button
                            color="primary"
                            size="lg"
                            block
                            disabled={!this.validateForm()}
                        >
                            Send
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Forget_PW;