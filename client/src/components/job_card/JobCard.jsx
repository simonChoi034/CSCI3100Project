import React, {Component} from 'react';
import axios from 'axios';
import './JobCard.css';
import {
    Card, 
    CardTitle, 
    CardText, 
    Row, 
    Col,
    Button,
    Container
} from 'reactstrap';

class JobCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            job: props.job
        };
    }

    render() {
        return (
            <Col xs="12" sm="6" md="4" lg="3">
                <Card body className="my-3">
                    <CardTitle>{this.state.job.title}</CardTitle>
                    <CardText className="text-left">Region: {this.state.job.region}</CardText>
                    <CardText className="text-left">District: {this.state.job.district}</CardText>
                    <Button>More</Button>
                </Card>
            </Col>
        );
    }
}

export default JobCard;
