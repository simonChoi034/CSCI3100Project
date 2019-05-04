import React, {Component} from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from "reactstrap";
import axios from "axios";

class TutorModal extends Component{
    constructor(props) {
        super(props);
    }

    // handler for clicking the tutor "contact" button
    handleClick(){
        const data = {
            client_id: this.props.modalData.user_id
        };

        var handleChatModal = this.props.handleChatModal;

        // call rest api to create a chat with that tutor
        axios.post('/api/user/create_new_chat', data)
            .then(function () {
                handleChatModal();
            });
    }

    // map M/F to Male/Female
    mapTutorSex(data){
        const color = data.sex === 'M' ? "primary" : "danger";
        const sex = data.sex === 'M' ? "Male" : "Female";

        return (
            <Button disabled outline color={color}>
                { sex }
            </Button>
        )
    }

    // create the content of the popup model using the data of the tutor
    createModalContent() {
        const content = [];
        const data = this.props.modalData;

        if (data) {
            content.push(
                (<ListGroupItem key={1}>
                    <ListGroupItemHeading>Tutor name:</ListGroupItemHeading>
                    <ListGroupItemText>{ data.nick_name }</ListGroupItemText>
                </ListGroupItem>),
                (<ListGroupItem key={2}>
                    <ListGroupItemHeading>Sex:</ListGroupItemHeading>
                    <ListGroupItemText>{ this.mapTutorSex(data) }</ListGroupItemText>
                </ListGroupItem>),
                (<ListGroupItem key={3}>
                    <ListGroupItemHeading>Education level:</ListGroupItemHeading>
                    <ListGroupItemText>{ data.education_level }</ListGroupItemText>
                </ListGroupItem>),
                (<ListGroupItem key={4}>
                    <ListGroupItemHeading>Description:</ListGroupItemHeading>
                    <ListGroupItemText>{ data.description }</ListGroupItemText>
                </ListGroupItem>),
            )
        }
        return content;
    }

    // handler for the popup model
    handleModal() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className} size={'lg'}>
                <ModalHeader toggle={this.props.toggle}>
                    <div className={"d-flex justify-content-center"}>
                        <b>Tutor Information</b>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <ListGroup>
                        { this.createModalContent() }
                    </ListGroup>
                </ModalBody>
                <ModalFooter>
                    <Button outline color={"primary"} onClick={this.handleClick.bind(this)}>Contact Me</Button>
                </ModalFooter>
            </Modal>
        );
    }

    render() {
        return this.handleModal();

    }
}

export default TutorModal;