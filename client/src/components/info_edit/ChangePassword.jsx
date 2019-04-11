import React, {Component} from 'react';
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
import axios from 'axios';

class ChangePassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            old_password: '',
            password: '',
            confirm_password: ''
        }
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
            old_password: this.state.old_password,
            password: this.state.password
        };

        var self = this;
        axios.post('/api/user/info_edit_password', data)
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

    validateForm() {
        return this.state.password.length > 0 && (this.state.password === this.state.confirm_password);
    }

    createModalContent() {
        const content = [];
        const data = this.props.modalData;
        if (data) {
            content.push(
                <Form id = "password_edit" key = {'Form'} onSubmit={this.handleSubmit}>
                    <ListGroupItemHeading>Old Password: </ListGroupItemHeading>
                    <FormGroup>
                        <Input
                            type="password"
                            name="old_password"
                            id="old_password"
                            onChange={this.handleChange}
                        />
                    </FormGroup> 
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
                    
                    {
                        this.state.error ?
                            <Alert color='danger'>
                                {this.state.error_message}
                            </Alert> : null
                    }
                    <Button
                        type="submit"
                        id="password_submit_btn"
                        color="primary"
                        className="text-center float-right"
                        disabled={!this.validateForm()}
                    >
                        Change Password
                    </Button>
                </Form>
                )
        }
        return content;
    }

    handleModal() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className} size={'lg'}>
                <ModalHeader toggle={this.props.toggle}>
                    <div className={"d-flex justify-content-center"}>
                        <b>Change Password</b>
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

export default ChangePassword;