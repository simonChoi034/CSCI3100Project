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
import "./InfoEdit_parent.css";
import axios from 'axios';



class InfoEdit_Parent extends Component{
    constructor(props){
        super(props);
        this.state = {
            password: '',
            confirm_password: '',
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
        var select = false;
        const data = this.props.modalData;

        options.push(<option key = {""} value="">Please choose a district</option>);

        for (var key in districts) {
            options.push(<option key = {key}value="" disabled>{key}</option>);

            districts[key].forEach(function (e, key) {
                if (e.id == data.district){
                    select = true 
                }else{
                    select = false
                }
                options.push(<option key = {e.id} value={e.id} {...select?'select:selected':null}>{e.district}</option>);
            })
        }

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
            name: this.state.name,
            phone: this.state.phone,
            living_district: this.state.living_district,
            address: this.state.address
        };

        var self = this;
        axios.post('/api/user/info_edit_parent', data)
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
                    <Form id = "info_edit" onSubmit={this.handleSubmit}>
                    <ListGroupItemHeading>Username: </ListGroupItemHeading>
                    <ListGroupItem id = 'username'>{data.username}</ListGroupItem>  
                    <ListGroupItemHeading>Password: </ListGroupItemHeading>
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
                    <ListGroupItemHeading>Name: </ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <ListGroupItemHeading>Phone: </ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="text"
                            name="phone"
                            id="phone"
                            onChange={this.handleChange}
                            pattern="[0-9]*"
                            value = {data.phone}
                            maxLength={8}
                        />
                    </FormGroup>
                    <ListGroupItemHeading >Living district:</ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="select"
                            name="living_district"
                            id="living_district"
                            onChange={this.handleChange}>
                            { this.state.districtList && this.creatDropDown() }
                        </Input>
                    </FormGroup>
                    <ListGroupItemHeading >Address: </ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="text"
                            name="address"
                            id="address"
                            value = {data.address}
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

export default InfoEdit_Parent;
