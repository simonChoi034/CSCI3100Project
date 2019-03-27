import React, {Component} from 'react';
import { Button, FormGroup, FormControl, Form, FormCheck } from "react-bootstrap";
import "./parent_register.css"

export default class tutor_register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            password2: '',
            email: '',
        };

    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0
            && this.state.email.length > 0 && (this.state.password === this.state.password2);
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <Form.Label>Username: </Form.Label>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <Form.Label>Password: </Form.Label>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup controlId="password2" bsSize="large">
                        <Form.Label>Confirm Password: </Form.Label>
                        <FormControl
                            value={this.state.password2}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup controlId="email" bsSize="large">
                        <Form.Label>Email Address: </Form.Label>
                        <FormControl
                            value={this.state.email}
                            onChange={this.handleChange}
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup controlId="email" bsSize="large">
                        <Form.Label>Address: </Form.Label>
                        <FormControl
                            value={this.state.address}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        onClick={!this.validateForm()}
                        type="submit"
                        id="normal_submit_btn"
                    >
                        Register as Normal User
                    </Button>
                </form>
        );
    }
}