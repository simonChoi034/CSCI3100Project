import React, { Component } from "react";
import { Button, FormGroup, FormControl, Form, FormCheck } from "react-bootstrap";
import "./register.css";
import Tutor_register from "../components/tutor_register/tutor_register"
import Normal_register from "../components/parent_register/parent_register"

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            password2: '',
            email: '',
            tutor: false,
            showTutor: false
        };
        
        this.handleClick = this.handleClick.bind(this);
        this.out = this.getComponent();
    }

    handleClick(event) {  
        this.setState({
            showTutor: !this.state.showTutor
        });
        this.out = this.getComponent();
    }

    getComponent() {
        if (this.state.showTutor) { 
            return <Tutor_register/>
        } else {
            return <Normal_register/>
        }
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
            <div id="Register">
                <p>Register Page</p>
                <Button onClick={this.handleClick}>Change Tutor or Parent</Button> {/* test only */}
                {this.out}
            </div>
        );
    }

    

}

export default Register;