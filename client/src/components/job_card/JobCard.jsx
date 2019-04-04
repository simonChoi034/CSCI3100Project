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
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <Col sm="6">
                <Card body>
                    <CardTitle>Job title</CardTitle>
                    <CardText>recruit woman teacher</CardText>
                    <Button>More</Button>
                </Card>
            </Col>
        );
    }
}

export default JobCard;
