import React, { Component } from 'react';
import {Button, FormGroup, Label, Form, Input, Alert} from "reactstrap";
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
                })
            })
            .catch(function (err) {
                console.log(err)
            })

    }

    creatDropDown(){
        var options = [];
        var districts = this.state.districtList;

        options.push(<option value="">Please choose a district</option>);

        for (var key in districts) {
            options.push(<option value="" disabled>{key}</option>);

            districts[key].forEach(function (e) {
                options.push(<option value={e.id}>{e.area}</option>)
            })
        }

        return options;
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0
            && this.state.email.length > 0 && (this.state.password === this.state.confirm_password);
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            name: this.state.name,
            phone: this.state.phone,
            living_district: this.state.living_district,
            address: this.state.address
        };

        var self = this;
        axios.post('/api/user/parent_register', data)
            .then(function (res) {
                console.log(self.props);
                self.props.history.push('/');
            })
            .catch(function (err){
                const errors = err.response.data.errors;

                self.setState({
                    error: true,
                    error_message: errors[0].msg
                });
                console.log(errors)
            })

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
                            value={this.state.confirm_password}
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
                        <Label for="name">Name: </Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            size="lg"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone: </Label>
                        <Input
                            type="text"
                            name="phone"
                            id="phone"
                            size="lg"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="living_district">Living district:</Label>
                        <Input
                            type="select"
                            size="lg"
                            name="living_district"
                            id="living_district"
                            onChange={this.handleChange}>
                            { this.state.districtList ? this.creatDropDown() : null}
                        </Input>
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
                    {
                        this.state.error ?
                            <Alert color='danger'>
                                {this.state.error_message}
                            </Alert> : null
                    }
                    <Button
                        type="submit"
                        id="normal_submit_btn"
                        size="lg"
                        color="primary"
                        className="text-center"
                        disabled={!this.validateForm()}
                    >
                        Register as Parent
                    </Button>
                </form>
        );
    }
}

export default ParentRegister;