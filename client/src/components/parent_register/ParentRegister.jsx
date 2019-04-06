import React, { Component } from 'react';
import { Button, FormGroup, Label, Form, Input } from "reactstrap";
import "./ParentRegister.css";
import axios from 'axios';

class ParentRegister extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            confirm_password: '',
            email: '',
            name: '',
            phone: '',
            living_district: '',
            address: ''
        };
    }
    
    componentDidMount() {
        var self = this;
        axios.get('/api/user/parent_register')
            .then(function (res) {
                self.setState({
                    districtList: res.data.districtList,
                    living_district: res.data.districtList[0].id
                })
            })
            .catch(function (err) {
                console.log(err)
            })

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
                    <FormGroup>
                        <Label for="username">Username: </Label>
                        <Input
                            autoFocus
                            type="text"
                            name="username"
                            id="username"
                            size="lg"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password: </Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            size="lg"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirm_password">Confirm Password: </Label>
                        <Input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            size="lg"
                            value={this.state.password2}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email Address: </Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            size="lg"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address: </Label>
                        <Input
                            type="text"
                            name="address"
                            id="address"
                            size="lg"
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                        id="normal_submit_btn"
                        size="lg"
                        color="primary"
                        className="text-center"
                        block
                        disabled={!this.validateForm()}
                    >
                        Register as Normal User
                    </Button>
                </form>
        );
    }
}

export default ParentRegister;