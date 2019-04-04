import React, {Component} from 'react';
import './JobWall.css';
import JobCard from '../job_card/JobCard'
import {
    Card, 
    CardTitle, 
    CardText, 
    Row, 
    Col,
    Button
} from 'reactstrap';

class JobWall extends Component {

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

export default JobWall;
