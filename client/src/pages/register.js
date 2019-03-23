import React, { Component } from "react";
import { Button, FormGroup, FormControl, Form, FormCheck } from "react-bootstrap";
import "./register.css";
import tutor_register from "../components/tutor_register/tutor_register"

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            password2: '',
            email: '',
            tutor: false
        };

    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0
            && this.state.email.length > 0 && (this.state.password === this.state.password2);
    }

    toggleCheckboxValue = event => {
        this.setState({tutor: !this.state.tutor});
        this.change_tutor_group();
    }

    change_tutor_group(){
        this.tutor_group = (
        <FormGroup id = "tutor_group" style={{display: this.state.tutor ? 'none' : 'block' }}>
        <FormGroup controlId="phone" bsSize="large">
            <Form.Label>Phone: </Form.Label>
            <FormControl
                type="text"
                value={this.state.phone}
                onChange={this.handleChange}
                pattern="[0-9]*" 
                maxLength={8}
            />
        </FormGroup>
        <FormGroup controlId="full_name_ch" bsSize="large">
            <Form.Label>中文姓名: </Form.Label>
            <FormControl
                value={this.state.full_name_ch}
                onChange={this.handleChange}
                type="text"
            />
        </FormGroup>
        <FormGroup controlId="full_name_en" bsSize="large">
            <Form.Label>English Name: </Form.Label>
            <FormControl
                value={this.state.full_name_en}
                onChange={this.handleChange}
                type="text"
            />
        </FormGroup>
        <FormGroup controlId="nick_name" bsSize="large">
            <Form.Label>Nick Name: </Form.Label>
            <FormControl
                value={this.state.nick_name}
                onChange={this.handleChange}
                type="text"
            />
        </FormGroup>
        <Form.Group controlId="sex">
            <Form.Label>Sex:</Form.Label>
            <Form.Control as="select">
            <option value='M'>Male</option>
            <option value='F'>Female</option>
            </Form.Control>
        </Form.Group>
        <FormGroup controlId="upper_price" bsSize="large">
            <Form.Label>Upper Price: </Form.Label>
            <FormControl
                value={this.state.upper_price}
                onChange={this.handleChange}
                type="text"
                pattern="[0-9]*" 
            />
        </FormGroup>
        <FormGroup controlId="lower_price" bsSize="large">
            <Form.Label>Lower Price: </Form.Label>
            <FormControl
                value={this.state.lower_price}
                onChange={this.handleChange}
                type="text"
                pattern="[0-9]*" 
            />
        </FormGroup>
        <Form.Group controlId="education_level">
            <Form.Label>Education Level:</Form.Label>
            <Form.Control as="select">
            <option value='1'>HKCEE</option>
            <option value='2'>HKALE</option>
            <option value='3'>Hong Kong Diploma of Secondary Education</option>
            <option value='4'>Diplomas / Associates / Professional diploma / Higher diploma / Advanced diploma</option>
            <option value='5'>Bachelors</option>
            <option value='6'>Post-graduate certificates or diplomas / Masters</option>
            <option value='7'>Phd</option>
            </Form.Control>
        </Form.Group>
    </FormGroup>);
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
            <div id="Register">
                <p>Register Page</p>
                <tutor_register />
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
                    <Form.Label>Register as tutor: </Form.Label>
                    <FormCheck
                        name="tutor"
                        value={this.state.tutor}
                        onClick={this.toggleCheckboxValue}
                        type="checkbox"
                        ref="tutor"
                    />
                    {this.tutor_group}
                    <Button
                        block
                        bsSize="large"
                        onClick={!this.validateForm()}
                        type="submit"
                        id="submit_btn"
                    >
                        Register
                    </Button>
                </form>
            </div>
        );
    }

    

}

export default Register;