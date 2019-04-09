import React, {Component} from 'react';
import axios from 'axios';
import './JobsWall.css';
import JobCard from '../job_card/JobCard';
import JobModal from '../job_wall/JobModal';
import {
    Button,
    Row,
    Fade
} from 'reactstrap';

class JobsWall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            modal: false,
            modalData: null
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        axios.get("/api/job/list_job")
            .then(res => {
                this.setState({jobs: res.data.jobList})
            })
            .catch(err => console.error(err.toString()))
    }

    toggle(event, data) {
        this.setState(prevState => ({
            modal: !prevState.modal,
            modalData: data
        }));
    }

    createModal() {
        var props = {
            modal: this.state.modal,
            toggle: this.toggle,
            className: this.props.className,
        };

        return (
            <JobModal {...props} modalData={this.state.modalData}/>
        )
    }

    render() {
        return (
            <Fade>
                { this.createModal() }
                {
                    this.props.currentUser && !this.props.isTutor ?
                        <Row className="mx-0"><Button color="success" className="m-0" onClick={this.props.openForm}>Request a job</Button></Row>
                        : null
                }
                <Row>
                    {this.state.jobs.map((job) => 
                        <JobCard job={job} toggle={this.toggle}/>
                    )}
                </Row>
            </Fade>
        );
    }
}

export default JobsWall;
