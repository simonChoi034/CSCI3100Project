import React, {Component} from 'react';
import axios from 'axios';
import './JobCard.css';
import {
    Card, 
    CardTitle, 
    CardText,
    Col,
    Button,
    Badge
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
            <Col xs="12" sm="6" lg="4">
                <Card body className="my-3">
                    <CardTitle><Button outline color="primary">{this.state.job.subject}</Button></CardTitle>
                    <CardText className="text-left">Region: {this.state.job.region}</CardText>
                    <CardText className="text-left">District: {this.state.job.district}</CardText>
                    <Button className="more_btn" onClick={ (event) => this.props.toggle(event, this.state.job)}>More</Button>
                </Card>
            </Col>
        );
    }
}

export default JobCard;
