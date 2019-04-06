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
            jobs: [{title: 'Chinese', content: 'woman teacher!'}, {title: 'Eng', content: 'I want woman!'}, {title: 'Eng', content: 'I want woman!'}, {title: 'Eng', content: 'I want woman!'}, {title: 'Eng', content: 'I want woman!'}, {title: 'Eng', content: 'I want woman!'}]  // temp data
        };
    }

    componentDidMount() {
        axios.get("/api/job")
            .then(response => response.json())
            .then(data => {
                this.setState({jobs: data})
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
