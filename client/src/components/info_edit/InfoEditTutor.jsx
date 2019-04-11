import React, { Component } from 'react';
import {
    Button, FormGroup, Label, Form, Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ListGroup,
    Alert,
    Row,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from "reactstrap";
import "./InfoEditTutor.css";
import axios from 'axios';
import dateformat from 'dateformat';


class InfoEditTutor extends Component{
    constructor(props){
        super(props);
        this.state = {
            password: '',
            confirm_password: '',
            email: '',
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
                    eduLevelList: res.data.eduLevelList,
                    education_level: res.data.eduLevelList[0].id
                });
            })
            .catch(function (err) {
                console.log(err)
            })
        axios.get('/api/user/tutor_profile')
            .then(function (res) {
                self.setState({
                    name: res.data[0].name,
                    phone: res.data[0].phone,
                    full_name_ch: res.data[0].full_name_ch,
                    full_name_en: res.data[0].full_name_en,
                    nick_name: res.data[0].nick_name,
                    birth: res.data[0].birth,
                    sex: res.data[0].sex == 'M' ? 'Male' : 'Female',
                    education_level: res.data[0].education_level,
                    description: res.data[0].description
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    creatDropDown(){
        var options = [];

        this.state.eduLevelList.forEach(function (e) {
            options.push(<option key = {e.id} value={e.id}>{e.education_level}</option>);
        });

        return options;
    }

    validateForm() {
        return this.state.password.length > 0 && (this.state.password === this.state.confirm_password);
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }


    handleSubmit = event => {
        event.preventDefault();
        const data = {
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            phone: this.state.phone,
            full_name_ch: this.state.full_name_ch,
            full_name_en: this.state.full_name_en,
            nick_name: this.state.nick_name,
            education_level: this.state.education_level,
            description: this.state.description
        };

        var self = this;
        axios.post('/api/user/info_edit_tutor', data)
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

    createModalContent() {
        const content = [];
        const data = this.props.modalData;
        if (data) {
            content.push( 
                (
                    <Form id = "info_edit" key = {'Form'} onSubmit={this.handleSubmit}>
                    <ListGroupItemHeading>Username: </ListGroupItemHeading>
                    <ListGroupItem id = 'username'>{data.username}</ListGroupItem>  
                    <ListGroupItemHeading>New Password: </ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <ListGroupItemHeading>Confirm Password: </ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <ListGroupItemHeading>Email Address: </ListGroupItemHeading>
                    <ListGroupItem id = 'email'>{data.email}</ListGroupItem>  
                    <ListGroupItemHeading>Phone: </ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="text"
                            name="phone"
                            id="phone"
                            onChange={this.handleChange}
                            pattern="[0-9]*"
                            value = {this.state.phone}
                            maxLength={8}
                        />
                    </FormGroup>
                    <ListGroupItemHeading>中文姓名:</ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="text"
                            name="chinese_name"
                            id="full_name_ch"
                            onChange={this.handleChange}
                            value = {this.state.full_name_ch}
                        />
                    </FormGroup>
                    <ListGroupItemHeading>English Name:</ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="text"
                            name="english_name"
                            id="full_name_en"
                            onChange={this.handleChange}
                            value = {this.state.full_name_en}
                        />
                    </FormGroup>
                    <ListGroupItemHeading>Nick Name:</ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="text"
                            name="nick_name"
                            id="nick_name"
                            onChange={this.handleChange}
                            value = {this.state.nick_name}
                        />
                    </FormGroup>
                    <ListGroupItemHeading>Birth:</ListGroupItemHeading>
                    <ListGroupItem id = 'birth'>{dateformat(this.state.birth,"yyyy-mm-dd")}</ListGroupItem> 
                    <ListGroupItemHeading>Sex:</ListGroupItemHeading>
                    <ListGroupItem id = 'sex'>{this.state.sex}</ListGroupItem>  
                    <ListGroupItemHeading >Education Level:</ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="select"
                            id="education_level"
                            name="education_level"
                            onChange={this.handleChange}>
                            { this.state.eduLevelList && this.creatDropDown() }
                        </Input>
                    </FormGroup>
                    <ListGroupItemHeading >Self description: </ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            value = {this.state.description}
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
                        className="text-center float-right"
                        disabled={!this.validateForm()}
                    >
                        Edit Profile
                    </Button>
                </Form>
            ))
        }
        return content;
    }

    handleModal() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className} size={'lg'}>
                <ModalHeader toggle={this.props.toggle}>
                    <div className={"d-flex justify-content-center"}>
                        <b>Profile Edit</b>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <ListGroup>
                        { this.createModalContent() }
                    </ListGroup>
                </ModalBody>
            </Modal>
        );
    }

    render() {
        return this.handleModal();
    }
}

export default InfoEditTutor;
