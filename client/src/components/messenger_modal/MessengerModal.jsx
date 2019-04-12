import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody} from "reactstrap";
import Messenger from '../messenger/Messenger';

class MessengerModal extends Component{
    constructor(props){
        super(props);
    }

    handleModal() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} size={'lg'}>
                <ModalBody>
                    <Messenger/>
                </ModalBody>
            </Modal>
        )
    }

    render() {
        return this.handleModal();
    }
}

export default MessengerModal;