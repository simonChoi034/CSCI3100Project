import React, {Component} from 'react';
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
                    <CardTitle><Button disabled outline color="primary">{this.state.job.subject}</Button></CardTitle>
                    <CardText className="text-left">Region: {this.state.job.region}</CardText>
                    <CardText className="text-left">District: {this.state.job.district}</CardText>
                    <CardText className="text-left">Student Level: {this.state.job.student_level}</CardText>
                    <CardText className="text-left">Tuition Fee: {this.state.job.tuition_fee}</CardText>
                    <Button color="info" className="detail_btn" onClick={ (event) => this.props.toggle(event, this.state.job)}>Show Detail</Button>
                </Card>
            </Col>
        );
    }
}

export default JobCard;
