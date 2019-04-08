import React, { Component } from 'react';
import "./jobs_wall.css";
import JobWall from '../components/job_wall/JobsWall';
import JobForm from '../components/job_form/JobForm'
import {authenticationService} from "../components/auth/authentication.service";
import {Role} from "../components/helper";

class Jobs extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isTutor: x && x.role === Role.Tutor
        }));
    }

    render() {
        return (
            <JobWall/>
        )
    }
}

export default Jobs;