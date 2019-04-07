import React, {Component} from 'react';
import axios from 'axios';
import './JobsWall.css';
import JobCard from '../job_card/JobCard';
import {
    Container,
    Row, 
} from 'reactstrap';

class JobsWall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [{title: 'Chinese', district_id: 1}, {title: 'Eng', district_id: 5}, {title: 'Eng', district_id: 9}, {title: 'Eng', district_id: 3}, {title: 'Eng', district_id: 2}, {title: 'Eng', district_id: 7}]  // temp data
        };
    }

    componentDidMount() {
        axios.get("/api/job/list_job")
            .then(res => {
                this.setState({jobs: res.data.jobList})
            })
            .catch(err => console.error(err.toString()))
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    {this.state.jobs.map((job) => 
                        <JobCard job={job} />
                    )}
                </Row>
            </Container>
        );
    }
}

export default JobsWall;
