import React, {Component} from 'react';
import {Modal, ModalHeader, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Col} from "reactstrap";
import ModalBody from "reactstrap/es/ModalBody";
import ModalFooter from "reactstrap/es/ModalFooter";
import Button from "reactstrap/es/Button";

class JobModal extends Component{
    constructor(props){
        super(props);
    }

    createModalContent() {
        const content = [];
        const data = this.props.modalData;
        if (data){
            content.push(
                // data
            )
        }
        return content;
    }

    handleModal() {
        const modal = (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className} size={'lg'}>
                <ModalHeader toggle={this.props.toggle}>
                    <div className={"d-flex justify-content-center"}>
                        <b>Job Info</b>
                    </div>
                </ModalHeader>
                <ModalBody>
                    { this.createModalContent() }
                </ModalBody>
                <ModalFooter>
                    <Button outline color={"primary"}>Contact Me</Button>
                </ModalFooter>
            </Modal>
        );

        return modal;
    }

    render() {
        return this.handleModal();
    }
}

export default JobModal;