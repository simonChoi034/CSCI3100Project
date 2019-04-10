import React, { Component } from 'react';
import axios from 'axios';
import './TutorCard.css';
import {
    Card,
    CardTitle,
    CardText,
    Col,
    Button,
} from 'reactstrap';

class TutorCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tutor: props.tutor
        };
    }

    render() {
        return (
            <Col xs="12" sm="6" md="4" lg="3">
                <Card body className="my-3">
                    <CardTitle>{this.state.tutor.nick_name}</CardTitle>
                    <CardText className="text-left">Gender: {this.state.tutor.sex}</CardText>
                    <CardText className="text-left">Education Level: {this.state.tutor.education_level}</CardText>
                    <Button
                        className = "contact_btn"
                        color="primary"
                        block
                        onClick={ (event) => this.props.toggle(event, this.state.tutor) }
                    >
                        More info
                    </Button>
                </Card>
            </Col>
        );
    }
}

export default TutorCard;
