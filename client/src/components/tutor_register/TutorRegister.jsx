import React, {Component, PureComponent} from 'react';
import { Button, FormGroup, FormControl, Form, Alert } from "react-bootstrap";
import "./TutorRegister.css";
import axios from 'axios';

class DropDown extends PureComponent{
    render() {
        return this.props.eduLevel.map(e => (
            <option value={e.id}>{e.name}</option>
        ))
    }
}

class TutorRegister extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            confirm_password: '',
            email: '',
            phone: '',
            full_name_ch: '',
            full_name_en: '',
            nick_name: '',
            sex: 'M',
            birth: '',
            education_level: '',
            description: '',
            error: false,
            error_message: ''
        };
    }

    componentDidMount() {
        var self = this;
        axios.get('/api/user/tutor_register')
            .then(function (res) {
                self.setState({
                    eduLevel: res.data.eduLevel,
                    education_level: res.data.eduLevel[0].id
                });
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
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            phone: this.state.phone,
            full_name_ch: this.state.full_name_ch,
            full_name_en: this.state.full_name_en,
            nick_name: this.state.nick_name,
            sex: this.state.sex,
            birth: this.state.birth,
            education_level: this.state.education_level
        };

        const self = this;
        axios.post('/api/user/tutor_register', data)
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
            <form id = "tutor_register" onSubmit={this.handleSubmit}>
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
                <FormGroup controlId="confirm_password" bsSize="large">
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
                <Form.Group controlId="birth">
                    <Form.Label>Birth:</Form.Label>
                    <FormControl
                        value={this.state.birth}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="YYYY-mm-dd"
                    />
                </Form.Group>
                <Form.Group controlId="education_level">
                    <Form.Label>Education Level:</Form.Label>
                    <Form.Control as="select" onChange={this.handleChange}>
                        {this.state.eduLevel &&
                        <DropDown eduLevel={this.state.eduLevel}/>
                        }
                    </Form.Control>
                </Form.Group>
                {
                    this.state.error ?
                        <Alert variant='danger'>
                            {this.state.error_message}
                        </Alert> : null
                }
                <Button
                    block
                    bsSize="large"
                    onClick={!this.validateForm()}
                    type="submit"
                    id="tutor_submit_btn"
                >
                    Register as Tutor
                </Button>
            </form>
        );
    }
}

export default TutorRegister;