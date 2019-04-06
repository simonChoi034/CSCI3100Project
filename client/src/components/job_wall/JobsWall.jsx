import React, {Component} from 'react';
import axios from 'axios';
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
            jobs: [{job_title: 'Chinese', job_description: 'woman teacher!'}, {job_title: 'Eng', job_description: 'woman!'}]  // temp data
        };
    }

    componentDidMount() {
      axios.get("/api/jobs")
            .then(response => response.json())
            .then(data => {
                this.setState({jobs: data})
            })
            .catch(err => console.error(err.toString()))
    }

    render() {
        return (
            <Row>
                {this.state.jobs.map((job) => 
                    <JobCard job={job} />
                )}
            </Row>
        );
    }
}

export default JobsWall;
