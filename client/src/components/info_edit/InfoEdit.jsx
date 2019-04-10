import React, { Component } from 'react';
import {Button, FormGroup, Label, Form, Input, Alert} from "reactstrap";
import "./InfoEdit.css.css";
import axios from 'axios';

class InfoEdit extends Component {

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
        axios.get('/api/user/info_edit')
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

        options.push(<option key = {""} value="">Please choose a district</option>);

        for (var key in districts) {
            options.push(<option key = {key}value="" disabled>{key}</option>);

            districts[key].forEach(function (e, key) {
                options.push(<option key = {e.id} value={e.id}>{e.district}</option>);
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
        axios.post('/api/user/info_edit', data)
            .then(function (res) {
                console.log(self.props);
                self.props.history.push('/login');
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
            <Form id = "info_edit" onSubmit={this.handleSubmit}>
                <Label className="text-center">Information Edit</Label>
                <FormGroup>
                    <Label for="username">Username: </Label>
                    <Input
                        autoFocus
                        type="text"
                        name="username"
                        id="username"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password: </Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="confirm_password">Confirm Password: </Label>
                    <Input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email Address: </Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone: </Label>
                    <Input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={this.handleChange}
                        pattern="[0-9]*"
                        maxLength={8}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="living_district">Living district:</Label>
                    <Input
                        type="select"
                        name="living_district"
                        id="living_district"
                        onChange={this.handleChange}>
                        { this.state.districtList && this.creatDropDown() }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="address">Address: </Label>
                    <Input
                        type="text"
                        name="address"
                        id="address"
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
                    color="primary"
                    className="text-center"
                    disabled={!this.validateForm()}
                >
                    Edit
                </Button>
            </Form>
        );
    }
}

export default InfoEdit;
