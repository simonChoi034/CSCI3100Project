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

class TutorModal extends Component{
    constructor(props) {
        super(props);
    }

    mapTutorSex(data){
        const color = data.sex === 'M' ? "primary" : "danger";
        const sex = data.sex === 'M' ? "Male" : "Female";

        return (
            <Button outline color={color}>
                { sex }
            </Button>
        )
    }

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

    handleModal() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className} size={'lg'}>
                <ModalHeader toggle={this.props.toggle}>
                    <div className={"d-flex justify-content-center"}>
                        <b>Tutor Info</b>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <ListGroup>
                        { this.createModalContent() }
                    </ListGroup>
                </ModalBody>
                <ModalFooter>
                    <Button outline color={"primary"}>Contact Me</Button>
                </ModalFooter>
            </Modal>
        );
    }

    render() {
        return this.handleModal();

    }
}

export default TutorModal;