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
import Password from './ChangePassword'
import axios from 'axios';
import dateformat from 'dateformat';


class InfoEditTutor extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            phone: '',
            nick_name: '',
            email: '',
            description: '',
            full_name_ch: '',
            full_name_en: '',
            description: '',
            error: false,
            error_message: ''
        };
        this.toggle = this.toggle.bind(this);
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
                    id: res.data[0].id,
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


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    toggle(event, data) {
        this.setState(prevState => ({
            modal: !prevState.modal,
            modalData: data
        }));
    }

    createModal() {
        const props = {
            modal: this.state.modal,
            toggle: this.toggle,
            className: this.props.className,
            modalData: this.state.modalData
        };

        return (
            <Password {...props}/>
        )
    
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = {
            id: this.state.id,
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
                    <ListGroupItemHeading>Change Password: </ListGroupItemHeading>
                    <ListGroupItem id = 'pw'>
                    <Button outline color = 'info' onClick={(event) => this.toggle(event, this.state.id)}>Click here to change Password</Button>
                    </ListGroupItem>
                    <ListGroupItemHeading>Email Address: </ListGroupItemHeading>
                    <ListGroupItem id = 'email'>{data.email}</ListGroupItem>  
                    <ListGroupItemHeading>Phone: </ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="text"
                            name="phone"
                            id="phone"
                            onChange={this.handleChange}
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
                { this.createModal() }
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
