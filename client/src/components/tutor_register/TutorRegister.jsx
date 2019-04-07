import React, { Component } from 'react';
import { Button, FormGroup, Input, Label, Form, Alert } from "reactstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./TutorRegister.css";
import axios from 'axios';
import dateformat from 'dateformat';

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
            error: false,
            error_message: ''
        };
    }

    componentDidMount() {
        var self = this;
        axios.get('/api/user/tutor_register')
            .then(function (res) {
                self.setState({
                    eduLevelList: res.data.eduLevelList,
                    education_level: res.data.eduLevelList[0].id
                });
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    creatDropDown(){
        var options = [];

        this.state.eduLevelList.forEach(function (e) {
            options.push(<option value={e.id}>{e.name}</option>)
        });

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

    handleDateChange = date => {
        this.setState({
            birth: date
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
            birth: dateformat(this.state.birth, "yyyy-mm-dd"),
            education_level: this.state.education_level
        };

        const self = this;
        axios.post('/api/user/tutor_register', data)
            .then(function (res) {
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
            <Form id = "tutor_register" onSubmit={this.handleSubmit}>
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
                    <Label for="phone">Phone: </Label>
                    <Input
                        type="text"
                        name="phone_number"
                        id="phone"
                        size="lg"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        pattern="[0-9]*"
                        maxLength={8}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="full_name_ch">中文姓名: </Label>
                    <Input
                        type="text"
                        name="chinese_name"
                        id="full_name_ch"
                        size="lg"
                        value={this.state.full_name_ch}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="full_name_en">English Name: </Label>
                    <Input
                        type="text"
                        name="english_name"
                        id="full_name_en"
                        size="lg"
                        value={this.state.full_name_en}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="nick_name">Nick Name: </Label>
                    <Input
                        type="text"
                        name="nick_name"
                        id="nick_name"
                        size="lg"
                        value={this.state.nick_name}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="sex">Sex:</Label>
                    <Input type="select" size="lg">
                        <option value='M'>Male</option>
                        <option value='F'>Female</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="birth">Birth: </Label>
                    <DatePicker 
                        id="birth"
                        name="birth"
                        dateFormat="dd/MM/yyyy"
                        selected={ this.state.birth }
                        onChange={ this.handleDateChange }
                        placeholderText="Choose your birthday"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="education_level">Education Level:</Label>
                    <Input type="select" size="lg" onChange={this.handleChange}>
                        { this.state.eduLevelList ? this.creatDropDown() : null}
                    </Input>
                </FormGroup>
                {
                    this.state.error ?
                        <Alert color='danger'>
                            {this.state.error_message}
                        </Alert> : null
                }
                <Button
                    type="submit"
                    id="tutor_submit_btn"
                    size="lg"
                    color="primary"
                    className="text-center"
                    disabled={!this.validateForm()}
                >
                    Register as Tutor
                </Button>
            </Form>
        );
    }
}

export default TutorRegister;