import React, {Component} from 'react';
import './JobsWall.css';
import JobCard from '../job_card/JobCard';
import {
    Card, 
    CardTitle, 
    CardText, 
    Row, 
    Col,
    Button
} from 'reactstrap';

class JobsWall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <Row>
                <JobCard />
                <JobCard />
                <JobCard />
            </Row>
        );
    }
}

export default JobsWall;
