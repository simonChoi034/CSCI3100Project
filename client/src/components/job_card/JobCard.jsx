import React, {Component} from 'react';
import axios from 'axios';
import './JobCard.css';
import {
    Card, 
    CardTitle, 
    CardText, 
    Row, 
    Col,
    Button
} from 'reactstrap';
import Axios from 'axios';

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
                <Card body>
                    <CardTitle>{this.state.job.title}</CardTitle>
                    <CardText>Region: {this.state.job.region}</CardText>
                    <CardText>District: {this.state.job.district}</CardText>
                    <Button>More</Button>
                </Card>
            </Col>
        );
    }
}

export default JobCard;
