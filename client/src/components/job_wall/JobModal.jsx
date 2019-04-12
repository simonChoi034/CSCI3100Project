import React, {Component} from 'react';
import './JobModal.css'
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
                    <Button outline color={"primary"}>Message Me</Button>
                </ModalFooter>
            </Modal>
        );
    }

    render() {
        return this.handleModal();
    }
}

export default JobModal;