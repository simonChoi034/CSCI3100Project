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
import "./InfoEditParent.css";
import Password from './ChangePassword'
import axios from 'axios';



class InfoEditParent extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            phone: '',
            living_district: '',
            address: ''
        };
        this.toggle = this.toggle.bind(this);
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
            });
        axios.get('/api/user/parent_profile')
            .then(function (res) {
                self.setState({
                    id: res.data[0].id,
                    name: res.data[0].name,
                    phone: res.data[0].phone,
                    living_district: res.data[0].living_district_id,
                    address: res.data[0].address
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
            options.push(<option key = {key} value="" disabled>{key}</option>);

            districts[key].forEach(function (e, key) {
                options.push(<option key = {e.id} value={e.id}>{e.district}</option>);
            })
        }

        return options;
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

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = {
            id: this.state.id,
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
                    <Form id = "info_edit" key = {'Form'} onSubmit={this.handleSubmit}>
                    <ListGroupItemHeading>Username: </ListGroupItemHeading>
                    <ListGroupItem id = 'username'>{data.username}</ListGroupItem>  
                    <ListGroupItemHeading>Change Password: </ListGroupItemHeading>
                    <ListGroupItem id = 'pw'>
                    <Button outline color = 'info' onClick={(event) => this.toggle(event, this.state.id)}>Click here to change Password</Button>
                    </ListGroupItem>
                    <ListGroupItemHeading>Email Address: </ListGroupItemHeading>
                    <ListGroupItem id = 'email'>{data.email}</ListGroupItem>  
                    <ListGroupItemHeading>Name: </ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value = {this.state.name}
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
                            value = {this.state.phone}
                            maxLength={8}
                        />
                    </FormGroup>
                    <ListGroupItemHeading >Living district:</ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="select"
                            name="living_district"
                            id="living_district"
                            defaultValue = {this.state.living_district}
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
                            value = {this.state.address}
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
            {this.createModal()}
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

export default InfoEditParent;
