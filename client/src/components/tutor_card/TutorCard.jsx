import React, { Component } from 'react';
import axios from 'axios';
import './TutorCard.css';
import {
    Card,
    CardTitle,
    CardText,
    Row,
    Col,
    Button,
    Container
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
                    <CardTitle>{this.state.tutor.title}</CardTitle>
                    <CardText className="text-left">Name: {this.state.tutor.name}</CardText>
                    <CardText className="text-left">Teaching Subjects: {this.state.tutor.subjects}</CardText>
                    <Button className = "more_btn">More</Button>
                </Card>
            </Col>
        );
    }
}

export default TutorCard;
