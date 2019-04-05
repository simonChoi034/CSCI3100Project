import React, {Component} from 'react';
import './JobCard.css';
import {
    Card, 
    CardTitle, 
    CardText, 
    Row, 
    Col,
    Button
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
            <Col sm="4">
                <Card body>
                    <CardTitle>{this.state.jobs.title}</CardTitle>
                    <CardText>recruit woman teacher</CardText>
                    <Button>More</Button>
                </Card>
            </Col>
        );
    }
}

export default JobCard;
