import React, {Component} from 'react';
import './JobModal.css'
import axios from 'axios';

import {
    Row,
    Col,
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


class JobModal extends Component{
    constructor(props){
        super(props);
    }

    handleClick() {
        // create new chatroom
        const data = {
            client_id: this.props.modalData.client_id
        };

        var handleChatModal = this.props.handleChatModal;

        // call Rest Api to create a new chat on the messenger
        axios.post('/api/user/create_new_chat', data)
            .then(function () {
                handleChatModal();
            });
    }

    // create the content got from database for the jobModel popup
    createModalContent() {
        const content = [];
        const data = this.props.modalData;
        if (data) {
            content.push(
                (<Row key = {'row'}>
                    <Col>
                        <ListGroupItem key = {1}>
                            <ListGroupItemHeading>{'Region:'}</ListGroupItemHeading>
                            <ListGroupItemText>{data.region}</ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem key = {2}>
                            <ListGroupItemHeading>{'District:'} </ListGroupItemHeading>
                            <ListGroupItemText>{data.district}</ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem key = {3}>
                            <ListGroupItemHeading>{'Student Level:'}</ListGroupItemHeading>
                            <ListGroupItemText>{data.student_level}</ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem key = {4}>
                            <ListGroupItemHeading>{'Tuition Fee:'}</ListGroupItemHeading>
                            <ListGroupItemText>{data.tuition_fee}</ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem key = {5}>
                            <ListGroupItemHeading>{'Number of Student:'}</ListGroupItemHeading>
                            <ListGroupItemText>{data.num_of_student} </ListGroupItemText>
                        </ListGroupItem>
                    </Col>
                    <Col>
                        <ListGroupItem key = {6}>
                            <ListGroupItemHeading>{'Tutorial time per week:'}</ListGroupItemHeading>
                            <ListGroupItemText>{data.times_per_week}</ListGroupItemText>
                        </ListGroupItem>
                            <ListGroupItem key = {7}>
                            <ListGroupItemHeading>{'Duration:'} </ListGroupItemHeading>
                            <ListGroupItemText>{data.duration}</ListGroupItemText>
                        </ListGroupItem>
                            <ListGroupItem key = {8}>
                            <ListGroupItemHeading>{'Lesson Time:'}</ListGroupItemHeading>
                            <ListGroupItemText>{data.lesson_time}</ListGroupItemText>
                        </ListGroupItem>
                            <ListGroupItem key = {9}>
                            <ListGroupItemHeading>{'Hotline:'} </ListGroupItemHeading>
                            <ListGroupItemText>{data.hotline}</ListGroupItemText>
                        </ListGroupItem>
                            <ListGroupItem key = {10}>
                            <ListGroupItemHeading>{'Remark:'} </ListGroupItemHeading>
                            <ListGroupItemText>{data.remark}</ListGroupItemText>
                        </ListGroupItem>
                    </Col>
                </Row>
            ))
        }
        return content;
    }

    // handler for popping and hiding the jobModel popup
    handleModal() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className} size={'lg'}>
                <ModalHeader toggle={this.props.toggle}>
                    <div className={"d-flex justify-content-center"}>
                        <b>Job Information</b>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <ListGroup>
                        { this.createModalContent() }
                    </ListGroup>
                </ModalBody>
                <ModalFooter>
                    <Button outline color={"primary"} onClick={this.handleClick.bind(this)}>Message Me</Button>
                </ModalFooter>
            </Modal>
        );
    }

    render() {
        return this.handleModal();
    }
}

export default JobModal;