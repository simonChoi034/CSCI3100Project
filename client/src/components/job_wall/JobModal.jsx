import React, {Component} from 'react';
import {Modal, ModalHeader, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Col} from "reactstrap";
import ModalBody from "reactstrap/es/ModalBody";
import ModalFooter from "reactstrap/es/ModalFooter";
import Button from "reactstrap/es/Button";
import { constants } from 'crypto';


class JobModal extends Component{
    constructor(props){
        super(props);
    }

    createModalContent() {
        const content = [];
        const data = this.props.modalData;
        if (data){
            console.log(data);
            content.push(
                (<ListGroupItem> 
                    <ListGroupItemHeading>{'Region:'}</ListGroupItemHeading> 
                    <ListGroupItemText>{data.region}</ListGroupItemText>  
                </ListGroupItem>),
                (<ListGroupItem> 
                    <ListGroupItemHeading>{'District:'} </ListGroupItemHeading>
                    <ListGroupItemText>{data.district}</ListGroupItemText>
                </ListGroupItem>),
                (<ListGroupItem> 
                    <ListGroupItemHeading>{'Student Level:'}</ListGroupItemHeading> 
                    <ListGroupItemText>{data.student_level}</ListGroupItemText>  
                </ListGroupItem>),
                (<ListGroupItem> 
                    <ListGroupItemHeading>{'Tuition Fee:'}</ListGroupItemHeading> 
                    <ListGroupItemText>{data.tuition_fee}</ListGroupItemText>
                </ListGroupItem>),
                (<ListGroupItem> <ListGroupItemHeading>{'Number of Student:'}</ListGroupItemHeading> 
                    <ListGroupItemText>{data.num_of_student} </ListGroupItemText>
                </ListGroupItem>),
                (<ListGroupItem> 
                    <ListGroupItemHeading>{'Tutorial time per week:'}</ListGroupItemHeading>  
                    <ListGroupItemText>{data.times_per_week}</ListGroupItemText>  
                </ListGroupItem>),
                (<ListGroupItem> 
                    <ListGroupItemHeading>{'Duration:'} </ListGroupItemHeading>
                    <ListGroupItemText>{data.region}</ListGroupItemText>  
                </ListGroupItem>),
                (<ListGroupItem> <ListGroupItemHeading>{'Lesson Time:'}</ListGroupItemHeading> 
                    <ListGroupItemText>{data.region}</ListGroupItemText>
                </ListGroupItem>),
                (<ListGroupItem> 
                    <ListGroupItemHeading>{'Remark:'} </ListGroupItemHeading>
                    <ListGroupItemText>{data.remark}</ListGroupItemText>  </ListGroupItem>)
            )
        }
        console.log(content);
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
                <ListGroup>
                    { this.createModalContent() }
                </ListGroup>
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