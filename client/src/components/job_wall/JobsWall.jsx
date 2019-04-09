import React, {Component} from 'react';
import axios from 'axios';
import './JobsWall.css';
import JobCard from '../job_card/JobCard';
import {
    Container,
    Button,
    Row
} from 'reactstrap';

class JobsWall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: []  // temp data
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
            <div>
                {
                    this.props.currentUser && !this.props.isTutor ?
                        <Row className="mx-0"><Button color="success" className="m-0" onClick={this.props.openForm}>Request a job</Button></Row>
                        : null
                }
                <Row>
                    {this.state.jobs.map((job) => 
                        <JobCard job={job} />
                    )}
                </Row>
            </div>
        );
    }
}

export default JobsWall;
