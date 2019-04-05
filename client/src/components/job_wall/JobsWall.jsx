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
            jobs: ""
        };
    }

    componentDidMount() {
      axios.get("/api/jobs")
          .then(response => {
              const jobs = response.data;
              this.setState({jobs});
          });
    }

    render() {
        return (
            <Row>
                this.jobs.map((job) => 
                    <JobCard job={job} />
                )
            </Row>
        );
    }
}

export default JobsWall;
